import {useState} from 'react';
import styled from 'styled-components/native';
import foodIconsObjectArray from '../../../assets/IconList';
import {scale} from 'react-native-size-matters';
import {TouchableWithoutFeedback} from 'react-native';

const IconGrid = ({onSelectIcon}) => {
  return (
    <Container>
      <Grid>
        {foodIconsObjectArray.map(icon => (
          <IconComponent
            key={icon.index}
            emoji={icon.icon}
            onPress={() => onSelectIcon(icon.icon)}
          />
        ))}
      </Grid>
    </Container>
  );
};

const IconComponent = ({emoji, onPress}) => {
  return (
    <IconContainer>
      <Icon onPress={onPress} activeOpacity={1}>
        <IconText>{emoji}</IconText>
      </Icon>
    </IconContainer>
  );
};

const Container = styled.View`
  margin-bottom: ${scale(80)}px;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 ${scale(10)}px 0;
`;

const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const IconContainer = styled.View`
  width: 19%;
  align-items: center;
`;

const Icon = styled.TouchableOpacity`
  width: ${scale(50)}px;
  height: ${scale(50)}px;
  border-radius: ${scale(20)}px;
  justify-content: center;
  align-items: center;
`;

const IconText = styled.Text`
  font-size: ${scale(30)}px;
`;

export default IconGrid;
