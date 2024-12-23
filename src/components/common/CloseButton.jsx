import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale} from 'react-native-size-matters';

const CloseButton = ({style, onClose}) => {
  return (
    <Container style={style}>
      <Button onPress={onClose}>
        <Icon name="close" size={scale(20)} color="gray" />
      </Button>
    </Container>
  );
};

const Container = styled.View``;

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
`;

export default CloseButton;
