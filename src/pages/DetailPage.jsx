import React from 'react';
import CurrentFire from '../components/detail/CurrentFire';
import Header from '../components/common/Header';
import styled from 'styled-components/native';

const DetailPage = () => {
  return (
    <DetailContainer>
      <Header type="detail" />
      <CurrentFire />
      <StartButton>
        <ButtonText>시작하기</ButtonText>
      </StartButton>
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.View`
  /* flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px; */
`;

const StartButton = styled.TouchableOpacity`
  width: 100%;
  height: 43px;
  background-color: #ffc15b;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
