import {create} from 'zustand';

const useTimerStore = create(set => ({
  timers: {},

  initTimer: (timerId, initialMinutes, initialSeconds) => {
    set(state => ({
      timers: {
        ...state.timers,
        [timerId]: {
          time: {
            minutes: parseInt(initialMinutes),
            seconds: parseInt(initialSeconds),
          },
          isRunning: false,
          intervalId: null,
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

          if (minutes === 0 && seconds === 0) {
            clearInterval(currentTimer.intervalId);
            return {
              timers: {
                ...state.timers,
                [timerId]: {
                  ...currentTimer,
                  isRunning: false,
                  intervalId: null,
                },
              },
            };
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
      return {
        timers: {
          ...state.timers,
          [timerId]: {
            time: {
              minutes: parseInt(initialMinutes),
              seconds: parseInt(initialSeconds),
            },
            isRunning: false,
            intervalId: null,
          },
        },
      };
    });
  },
}));

export default useTimerStore;
