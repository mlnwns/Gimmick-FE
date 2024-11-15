import React, {useState} from 'react';
import styled from 'styled-components/native';
import ColorPicker from '../components/ColorPicker';
import RegistrationButton from '../components/RegistrationButton';
import InputComponent from '../components/InputComponent';
import IconPicker from '../components/IconPicker';
import CloseButton from '../components/CloseButton';
import {Modal} from 'react-native';

const ForderCreateModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const onPressModalOpen = () => {
    setIsModalVisible(true);
  };

  const onPressModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal animationType="slide" visible={isModalVisible} transparent={true}>
      <Container>
        <ModalView>
          <StyledCloseButton />
          <IconPicker />
          <StyledInputComponent />
          <RegistrationContainer>
            <ColorPicker />
            <StyledRegistrationButton />
          </RegistrationContainer>
        </ModalView>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ModalView = styled.View`
  border-radius: 10px;
  width: 80%;
  padding: 30px;
  justify-content: center;
  align-items: center;
  top: -8%;
  background-color: white;
`;

const StyledInputComponent = styled(InputComponent)`
  margin: 20px 0;
`;

const RegistrationContainer = styled.View`
  flex-direction: row;
`;

const StyledRegistrationButton = styled(RegistrationButton)`
  margin-left: 15px;
`;

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  top: 0;
  right: -20px;
`;

export default ForderCreateModal;
