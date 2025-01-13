import React from 'react';
import {scale} from 'react-native-size-matters';
import CustomText from '../CustomText';
import styled from 'styled-components/native';

const getFireColor = fireData => {
  switch (fireData) {
    case '약불':
      return '#FFA034';
    case '중불':
      return '#F69375';
    case '강불':
      return '#FB4216';
    default:
      return '#FFA034';
  }
};

const CurrentFire = ({fireData}) => {
  return (
    <CurrentFireContainer>
      <FireWrapper fireData={fireData}>
        <FireText weight="bold">{fireData}</FireText>
      </FireWrapper>
    </CurrentFireContainer>
  );
};

export default CurrentFire;

const CurrentFireContainer = styled.View`
  align-items: center;
  margin-top: ${scale(30)}px;
  margin-bottom: ${scale(20)}px;
`;

const FireText = styled(CustomText)`
  font-size: ${scale(18)}px;
  color: #fff;
`;

const FireWrapper = styled.View`
  background-color: ${props => getFireColor(props.fireData)};
  padding: ${scale(5)}px ${scale(23)}px;
  border-radius: ${scale(11)}px;
`;
