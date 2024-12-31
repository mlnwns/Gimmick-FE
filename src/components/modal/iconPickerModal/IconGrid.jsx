import {useState} from 'react';
import styled from 'styled-components/native';
import foodIconsObjectArray from '../../../assets/IconList';
import {scale} from 'react-native-size-matters';

const IconGrid = ({onSelectIcon}) => {
  return (
    <Container>
      <Grid>
        {foodIconsObjectArray.map(icon => (
          <IconComponent
            key={icon.id}
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
      <TouchableWithoutFeedback onPress={onPress}>
        <IconWrapper>
          <IconText>{emoji}</IconText>
        </IconWrapper>
      </TouchableWithoutFeedback>
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
`;

const IconContainer = styled.View`
  width: 20%;
  align-items: center;
`;

const IconWrapper = styled.View`
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
