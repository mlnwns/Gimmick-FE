import React from 'react';
import HeatSelector from '../Components/HeatSelector';
import styled from 'styled-components/native';

const DetailPage = () => {
  return (
    <DetailContainer>
      <HeatSelector />
      <StartButton>
        <ButtonText>시작하기</ButtonText>
      </StartButton>
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StartButton = styled.TouchableOpacity`
  width: 75%;
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
