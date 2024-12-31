import styled from 'styled-components/native';

const RegistrationButton = ({style}) => {
  const registration = () => {
    // 등록 함수 구현
  };

  return (
    <Container style={style}>
      <ButtonWrapper onPress={registration}>
        <Button>
          <ButtonText>등록</ButtonText>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.TouchableWithoutFeedback``;

const Button = styled.View`
  background-color: #ffc15b;
  height: 27px;
  padding: 0 25px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 800;
`;

export default RegistrationButton;
