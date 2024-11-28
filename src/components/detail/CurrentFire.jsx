import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import CustomText from '../CustomText';

import styled from 'styled-components/native';

const CurrentFire = () => {
  return (
    <HeatSelectorContainer>
      <FireWrapper>
        <FireText weight="bold">약불</FireText>
      </FireWrapper>
    </HeatSelectorContainer>
  );
};

export default CurrentFire;

const HeatSelectorContainer = styled.View`
  align-items: center;
`;

const FireText = styled(CustomText)`
  font-size: 18px;
  color: #fff;
`;

const FireWrapper = styled.View`
  background-color: #ffa034;
  padding: 5px 23px;
  border-radius: 11px;
`;
