import styled from 'styled-components';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {ScrollView} from 'react-native';
import Header from '../components/common/Header';
import CountdownTimer from '../components/timer/CountdownTimer';
import CountdownFolder from '../components/timer/CountdownFolder';

const MainPage = () => {
  const timers = Array(6).fill(null);
  const folders = Array(3).fill(null);

  return (
    <MainContainer>
      <HeaderWrapper>
        <Header type="main" />
      </HeaderWrapper>
      <CountdownTimerWrapper>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <TimersAndFoldersContainer>
            {timers.map((_, index) => (
              <CountdownTimer key={`timer-${index}`} />
            ))}
            {folders.map((_, index) => (
              <CountdownFolder key={`folder-${index}`} />
            ))}
          </TimersAndFoldersContainer>
        </ScrollView>
      </CountdownTimerWrapper>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.View`
  flex-direction: column;
  height: 100%;
`;

const HeaderWrapper = styled.View`
  flex: 0.8;
`;

const CountdownTimerWrapper = styled.View`
  margin-top: ${scale(20)}px;
  flex: 10;
`;

const TimersAndFoldersContainer = styled.View`
  flex-direction: row;
  gap: ${scale(22)}px;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: ${scale(20)}px;
`;

const CreateCountdownTimerBtn = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px dashed #3562d6;
  justify-content: center;
  align-items: center;
`;
