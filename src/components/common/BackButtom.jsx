import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';

const BackButtom = ({style}) => {
  const back = () => {
    // 뒤로 가기 함수 구현
  };

  return (
    <Container style={style}>
      <TouchableWithoutFeedback onPress={back}>
        <ButtonWrapper>
          <Icon name="chevron-back-outline" size={20} color="gray" />
        </ButtonWrapper>
      </TouchableWithoutFeedback>
    </Container>
  );
};

const Container = styled.View``;

const Button = styled.TouchableWithoutFeedback`
  height: ${scale(30)}px;
  justify-content: center;
  align-items: flex-start;
`;

export default BackButtom;
