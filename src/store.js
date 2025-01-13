import {create} from 'zustand';

const useTimerStore = create(set => ({
  timers: {},

  initTimer: (timerId, initialMinutes, initialSeconds, detailTimerData) => {
    const defaultTimer = {
      minutes: initialMinutes,
      seconds: initialSeconds,
      fireData: '중불',
    };

    const timerData =
      detailTimerData && detailTimerData.length > 0
        ? detailTimerData[0]
        : defaultTimer;

    const totalSeconds =
      parseInt(initialMinutes) * 60 + parseInt(initialSeconds);

    set(state => ({
      timers: {
        ...state.timers,
        [timerId]: {
          time: {
            minutes: parseInt(timerData.minutes),
            seconds: parseInt(timerData.seconds),
          },
          currentStepIndex: 0,
          detailTimerData: detailTimerData || [defaultTimer],
          isRunning: false,
          intervalId: null,
          remainingTotalSeconds: totalSeconds,
          totalTime: {
            minutes: parseInt(initialMinutes),
            seconds: parseInt(initialSeconds),
          },
        },
      },
    }));
  },

  startTimer: timerId => {
    set(state => {
      const timer = state.timers[timerId];
      if (!timer || timer.isRunning) return state;

      const intervalId = setInterval(() => {
        set(state => {
          const currentTimer = state.timers[timerId];
          const {minutes, seconds} = currentTimer.time;
          const newRemainingTotalSeconds =
            currentTimer.remainingTotalSeconds - 1;

          if (minutes === 0 && seconds === 0) {
            if (
              currentTimer.currentStepIndex <
              currentTimer.detailTimerData.length - 1
            ) {
              const nextIndex = currentTimer.currentStepIndex + 1;
              const nextStep = currentTimer.detailTimerData[nextIndex];

              return {
                timers: {
                  ...state.timers,
                  [timerId]: {
                    ...currentTimer,
                    currentStepIndex: nextIndex,
                    time: {
                      minutes: parseInt(nextStep.minutes),
                      seconds: parseInt(nextStep.seconds),
                    },
                    remainingTotalSeconds: newRemainingTotalSeconds,
                    totalTime: {
                      minutes: Math.floor(newRemainingTotalSeconds / 60),
                      seconds: newRemainingTotalSeconds % 60,
                    },
                  },
                },
              };
            } else {
              clearInterval(currentTimer.intervalId);
              return {
                timers: {
                  ...state.timers,
                  [timerId]: {
                    ...currentTimer,
                    isRunning: false,
                    intervalId: null,
                    remainingTotalSeconds: 0,
                    totalTime: {
                      minutes: 0,
                      seconds: 0,
                    },
                  },
                },
              };
            }
          }

          const newTime =
            seconds === 0
              ? {minutes: minutes - 1, seconds: 59}
              : {minutes, seconds: seconds - 1};

          return {
            timers: {
              ...state.timers,
              [timerId]: {
                ...currentTimer,
                time: newTime,
                remainingTotalSeconds: newRemainingTotalSeconds,
                totalTime: {
                  minutes: Math.floor(newRemainingTotalSeconds / 60),
                  seconds: newRemainingTotalSeconds % 60,
                },
              },
            },
          };
        });
      }, 1000);

      return {
        timers: {
          ...state.timers,
          [timerId]: {
            ...timer,
            isRunning: true,
            intervalId,
          },
        },
      };
    });
  },

  stopTimer: timerId => {
    set(state => {
      const timer = state.timers[timerId];
      if (timer?.intervalId) {
        clearInterval(timer.intervalId);
      }
      return {
        timers: {
          ...state.timers,
          [timerId]: {
            ...timer,
            isRunning: false,
            intervalId: null,
          },
        },
      };
    });
  },

  resetTimer: (timerId, initialMinutes, initialSeconds) => {
    set(state => {
      const timer = state.timers[timerId];
      if (timer?.intervalId) {
        clearInterval(timer.intervalId);
      }

      const firstStep = timer?.detailTimerData[0] || {
        minutes: initialMinutes,
        seconds: initialSeconds,
      };

      const totalSeconds =
        parseInt(initialMinutes) * 60 + parseInt(initialSeconds);

      return {
        timers: {
          ...state.timers,
          [timerId]: {
            ...timer,
            currentStepIndex: 0,
            time: {
              minutes: parseInt(firstStep.minutes),
              seconds: parseInt(firstStep.seconds),
            },
            isRunning: false,
            intervalId: null,
            remainingTotalSeconds: totalSeconds,
            totalTime: {
              minutes: parseInt(initialMinutes),
              seconds: parseInt(initialSeconds),
            },
          },
        },
      };
    });
  },
}));

export default useTimerStore;
