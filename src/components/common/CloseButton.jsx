import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale} from 'react-native-size-matters';
import {TouchableWithoutFeedback} from 'react-native';

const CloseButton = ({style, onClose}) => {
  return (
    <Container style={style}>
      <TouchableWithoutFeedback onPress={onClose}>
        <ButtonWrapper>
          <Icon name="close" size={scale(20)} color="gray" />
        </ButtonWrapper>
      </TouchableWithoutFeedback>
    </Container>
  );
};

const Container = styled.View``;

const ButtonWrapper = styled.View`
  justify-content: center;
  align-items: flex-start;
`;

export default CloseButton;
