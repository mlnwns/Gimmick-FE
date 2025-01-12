import React, {useEffect} from 'react';
import CurrentFire from '../components/detail/CurrentFire';
import CircularProgress from '../components/detail/CircularProgress';
import Header from '../components/common/Header';
import styled from 'styled-components/native';
import CustomText from '../components/CustomText';
import {scale} from 'react-native-size-matters';
import useTimerStore from '../store';
import {TouchableWithoutFeedback} from 'react-native';
import {useRoute} from '@react-navigation/native';

const DetailColor = color => {
  if (color === '#FBDF60') return '#FFC15B';
  if (color === '#FCC4C4') return '#FFAAAA';
  if (color === '#61734D') return '#A8D96F';
  if (color === '#BAE2FF') return '#90CFFF';
  if (color === '#F6DBB7') return '#E9B97E';
};

const DetailPage = () => {
  const route = useRoute();
  const {timer} = route.params || {};
  const timerStore = useTimerStore();
  const currentTimer = useTimerStore(state => state.timers[timer.id]);
  const detailColor = DetailColor(timer.timerColor);

  useEffect(() => {
    if (!currentTimer) {
      timerStore.initTimer(timer.id, timer.totalMinutes, timer.totalSeconds);
    }
  }, [timer.id]);

  const handleTimerToggle = () => {
    if (currentTimer?.isRunning) {
      timerStore.stopTimer(timer.id);
    } else {
      timerStore.startTimer(timer.id);
    }
  };

  const handleReset = () => {
    timerStore.resetTimer(timer.id, timer.totalMinutes, timer.totalSeconds);
  };

  if (!currentTimer) return null;

  return (
    <DetailLayout>
      <HeaderWrapper>
        <Header type="detail" title={timer.timerName} timer={timer} />
      </HeaderWrapper>
      <ContentContainer>
        <CircularProgress icon={timer.icon} color={detailColor} />
        <CurrentFire />
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
          source={require('../assets/images/detail/swife-arrow.png')}
        />
        <SwifeText weight="semi-bold">스와이프하여 전체 정보 확인</SwifeText>
      </SwifeContainer>
    </DetailLayout>
  );
};

export default DetailPage;

const DetailLayout = styled.View`
  height: 100%;
`;

const HeaderWrapper = styled.View``;

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
  font-size: ${scale(15)}px;
`;
