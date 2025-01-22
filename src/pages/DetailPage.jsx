import React, {useEffect, useState, useRef} from 'react';
import {Platform, Dimensions} from 'react-native';
import CurrentFire from '../components/detail/CurrentFire';
import CurrentMemo from '../components/detail/CurrentMemo';
import CircularProgress from '../components/detail/CircularProgress';
import Header from '../components/common/Header';
import styled from 'styled-components/native';
import CustomText from '../components/CustomText';
import {scale} from 'react-native-size-matters';
import useTimerStore from '../store';
import {TouchableWithoutFeedback} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';

const DetailColor = color => {
  if (color === '#FBDF60') return '#FFC15B';
  if (color === '#F6DBB7') return '#E9B97E';
  if (color === '#BAE2FF') return '#90CFFF';
  if (color === '#C8E7A7') return '#93C572';
  if (color === '#FCC4C4') return '#F4A7A3';
};

const DetailPage = () => {
  const [isSwifeOpen, setSwifeOpen] = useState(false);
  const route = useRoute();
  const {timer} = route.params || {};
  const timerStore = useTimerStore();
  const currentTimer = useTimerStore(state => state.timers[timer.id]);

  const detailColor = DetailColor(timer.timerColor);

  useEffect(() => {
    if (!currentTimer && !timerStore.timers[timer.id]) {
      timerStore.initTimer(
        timer.id,
        timer.detailTimerData[0].minutes,
        timer.detailTimerData[0].seconds,
        timer.detailTimerData,
      );
    }
  }, [timer.id]);

  const handleTimerToggle = () => {
    if (currentTimer?.isRunning) {
      timerStore.stopTimer(timer.id);
    } else {
      timerStore.startTimer(timer.id);
    }
  };

  const calculateProgress = () => {
    if (!currentTimer) return 1;
    const totalSeconds = timer.totalMinutes * 60 + parseInt(timer.totalSeconds);
    const remainingSeconds = currentTimer.remainingTotalSeconds;
    return remainingSeconds / totalSeconds;
  };

  const progress = calculateProgress();

  const handleReset = () => {
    timerStore.resetTimer(timer.id, timer.totalMinutes, timer.totalSeconds);
  };

  const getCurrentFireData = () => {
    if (!currentTimer) return '';
    return timer.detailTimerData[currentTimer.currentStepIndex].fireData;
  };

  const getCurrentMemoData = () => {
    if (!currentTimer) return '';
    return timer.detailTimerData[currentTimer.currentStepIndex].memoData;
  };

  const translateY = useSharedValue(0);
  const [isGestureActive, setGestureActive] = useState(false);

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      if (event.translationY <= 0) {
        translateY.value = event.translationY;
      }
    })
    .onEnd(() => {
      if (translateY.value <= 0 && translateY.value >= -350) {
        runOnJS(setSwifeOpen)(false);
        translateY.value = withSpring(0, {damping: 40, stiffness: 150});
      } else {
        runOnJS(setSwifeOpen)(true);
        translateY.value = withSpring(-350, {damping: 40, stiffness: 150});
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const handleTextLayout = event => {
    const {width} = event.nativeEvent.layout;
    setTextWidth(width);
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <DetailLayout>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={animatedStyle}>
          <DetailTimerContainer>
            <HeaderWrapper>
              <Header type="detail" title={timer.timerName} timer={timer} />
            </HeaderWrapper>
            <ContentContainer>
              <CircularProgress
                icon={timer.icon}
                color={detailColor}
                progress={calculateProgress()}
              />
              <CurrentFire fireData={getCurrentFireData()} />
              <TimerDisplay weight="semi-bold">
                {String(currentTimer.time.minutes).padStart(2, '0')}:
                {String(currentTimer.time.seconds).padStart(2, '0')}
              </TimerDisplay>
              <ButtonContainer>
                <TouchableWithoutFeedback onPress={handleReset}>
                  <ButtonWrapper color={detailColor}>
                    <ResetButtonImage
                      source={require('../assets/images/detail/reset-icon.png')}
                    />
                  </ButtonWrapper>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={handleTimerToggle}>
                  <ButtonWrapper color={detailColor}>
                    <StartButtonImage
                      source={
                        currentTimer.isRunning
                          ? require('../assets/images/detail/stop-icon.png')
                          : require('../assets/images/detail/start-icon.png')
                      }
                    />
                  </ButtonWrapper>
                </TouchableWithoutFeedback>
              </ButtonContainer>
            </ContentContainer>
            <SwifeContainer>
              <SwifeButtonImage
                source={
                  isSwifeOpen
                    ? require('../assets/images/detail/swife-arrow-bottom.png')
                    : require('../assets/images/detail/swife-arrow-top.png')
                }
              />
              <SwifeText weight="semi-bold">
                스와d이프하여 전체 정보 확인
              </SwifeText>
            </SwifeContainer>
          </DetailTimerContainer>

          <Animated.View>
            <SwipeContent>
              <TimeTextProgressContainer>
                <TimerText weight="semi-bold">총 남은 시간</TimerText>
                <TimerRemainText weight="bold">
                  {currentTimer
                    ? `${String(currentTimer.totalTime.minutes).padStart(
                        2,
                        '0',
                      )}:${String(currentTimer.totalTime.seconds).padStart(
                        2,
                        '0',
                      )}`
                    : '00:00'}
                </TimerRemainText>
              </TimeTextProgressContainer>
              <ProgressIconContainer>
                <ProgressView
                  style={{
                    right: 0,
                    width: `${progress * 95}%`,
                    height: `${scale(10)}px`,
                    borderTopRightRadius: scale(13),
                    borderBottomRightRadius: scale(13),
                  }}
                />
                <ProgressIconImage
                  source={require('../assets/images/detail/progress-icon.png')}
                />
              </ProgressIconContainer>
              <ProgressLine
                color={detailColor}
                width={screenWidth - scale(48)}
              />
              <MemoContainer>
                <MemoText weight="semi-bold">메모 사항</MemoText>
                <CurrentMemo memoData={getCurrentMemoData()} />
              </MemoContainer>
            </SwipeContent>
          </Animated.View>
        </Animated.View>
      </GestureDetector>
    </DetailLayout>
  );
};

const DetailLayout = styled.View`
  height: 100%;
`;

const HeaderWrapper = styled.View``;

const DetailTimerContainer = styled(Animated.View)`
  height: 100%;
`;

const ContentContainer = styled.View`
  height: 90%;
  margin-top: ${scale(-50)}px;
  align-items: center;
  justify-content: center;
`;

const TimerDisplay = styled(CustomText)`
  font-size: ${scale(56)}px;
  color: #6c7386;
  text-align: center;
  margin-bottom: ${scale(7)}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${scale(24)}px;
`;

const ButtonWrapper = styled.View`
  padding: ${scale(12)}px ${scale(40)}px;
  background-color: ${props => props.color};
  opacity: 0.9;
  border-radius: ${scale(12)}px;
  margin: ${scale(0)}px ${scale(10)}px;
  flex-direction: row;
  align-items: center;
`;

const ResetButtonImage = styled.Image`
  width: ${scale(20)}px;
  height: ${scale(24)}px;
`;

const StartButtonImage = styled.Image`
  width: ${scale(14)}px;
  height: ${scale(17)}px;
`;

const SwifeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${scale(10)}px;
`;

const SwifeButtonImage = styled.Image`
  width: ${scale(20)}px;
  height: ${scale(10)}px;
  margin-right: ${scale(10)}px;
`;

const SwifeText = styled(CustomText)`
  color: #6c7386;
  font-size: ${scale(17)}px;
`;

const SwipeContent = styled(Animated.View)`
  width: 100%;
  height: ${scale(300)};
  overflow: hidden;
  margin-top: ${scale(20)}px;
  align-items: center;
  position: absolute;
`;

const TimeTextProgressContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${scale(10)}px;
  gap: ${scale(5)}px;
`;

const TimerText = styled(CustomText)`
  font-size: ${scale(13)}px;
  color: #6c7386;
`;

const TimerRemainText = styled(CustomText)`
  font-size: ${scale(20)}px;
  color: #6c7386;
`;

const ProgressIconContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: ${scale(4)}px;
`;

const ProgressIconImage = styled.Image`
  width: ${scale(12)}px;
  height: ${scale(20)}px;
`;

const ProgressView = styled.View``;

const ProgressLine = styled.View`
  width: ${props => props.width};
  height: ${scale(10)}px;
  justify-content: center;
  border-radius: ${scale(10)}px;
  background-color: ${props => props.color};
`;

const MemoContainer = styled.View`
  margin-top: ${scale(10)}px;
  width: 100%;
  height: ${scale(200)}px;
  justify-content: center;
`;

const MemoText = styled(CustomText)`
  color: #000000;
  padding-left: ${scale(12)}px;
  margin-bottom: ${scale(10)}px;
  font-size: ${scale(15)}px;
`;
export default DetailPage;
