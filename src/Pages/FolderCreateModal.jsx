import React, {useState} from 'react';
import {Pressable, StyleSheet, View, Modal} from 'react-native';
import ColorPicker from '../Components/ColorPicker';
import RegistrationButton from '../Components/RegistrationButton';
import InputComponent from '../Components/InputComponent';
import IconPicker from '../Components/IconPicker';
import CloseButton from '../Components/CloseButton';

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
      <View style={styles.container}>
        <View style={styles.modalView}>
          <CloseButton style={styles.exitButton} />
          <IconPicker />
          <InputComponent style={styles.inputComponent} />
          <View style={styles.registrationContainer}>
            <ColorPicker />
            <RegistrationButton style={styles.registrationButton} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalView: {
    borderRadius: 10,
    width: '80%',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top: '-8%',
    backgroundColor: 'white',
  },

  inputComponent: {
    marginVertical: 20,
  },

  registrationContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  registrationButton: {
    marginLeft: 15,
  },

  exitButton: {
    position: 'absolute',
    top: 0,
    right: -20,
  },
});

export default ForderCreateModal;
