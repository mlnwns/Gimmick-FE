import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const HeatSelector = () => {
  const [selected, setSelected] = useState('강불');

  const options = ['약불', '중불', '강불'];
  return (
    <HeatSelectorContainer>
      {options.map(option => (
        <OptionButton
          key={option}
          selected={selected === option}
          onPress={() => setSelected(option)}>
          <OptionText selected={selected === option}>{option}</OptionText>
        </OptionButton>
      ))}
    </HeatSelectorContainer>
  );
};

export default HeatSelector;

const HeatSelectorContainer = styled.View`
  width: 75%;
  height: 30px;
  flex-direction: row;
  border-radius: 20px;
  border: 0.5px solid #c6c6c6;
  overflow: hidden;
`;

const OptionButton = styled.Pressable`
  flex: 1;
  padding: 4px;
  border-right-width: 0.5px;
  border-color: #c6c6c6;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.selected ? '#FFC15B' : 'white')};
`;

const OptionText = styled.Text`
  color: ${props => (props.selected ? 'white' : 'black')};
  font-weight: 500;
  font-size: 16px;
`;
