import {scale} from 'react-native-size-matters';
import styled from 'styled-components/native';
import CustomText from '../CustomText';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableWithoutFeedback} from 'react-native';

const PlusButton = ({style, isActive, fireText, onPress}) => {
  return (
    <ButtonContainer style={style}>
      <TouchableWithoutFeedback onPress={onPress}>
        <ButtonWrapper isActive={isActive}>
          <ButtonText>
            <Icon name="plus" color="white" size={scale(11)} />
          </ButtonText>
        </ButtonWrapper>
      </TouchableWithoutFeedback>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  width: 100%;
  height: ${scale(35)}px;
  border-radius: ${scale(10)}px;
  justify-content: center;
  align-items: center;
  background-color: #585858;
`;

const ButtonText = styled(CustomText)`
  color: #ffffff;
  font-size: ${scale(14)}px;
`;

export default PlusButton;
