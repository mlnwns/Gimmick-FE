import React, {useState} from 'react';
import {Pressable, StyleSheet, View, Modal, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CloseButton from '../Components/CloseButton';
import CreateButton from '../Components/CreateButton';

const CreateSelectModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <Modal
      animationType="slide"
      visible={isModalVisible}
      transparent={true}
      style={styles.modal}>
      <View style={styles.modalView}>
        <View style={styles.title}>
            <CloseButton style={styles.closeButton}/>
          <Text style={styles.text}>새로 만들기</Text>
        </View>
        <View style={styles.buttons}>
          <CreateButton
            text={'폴더'}
            icon={<Icon name="folder" size={25} color="gray" />}
            style={styles.button}
          />
          <CreateButton
            text={'타이머'}
            icon={<Icon name="timer" size={25} color="gray" />}
            style={styles.button}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {},
  modalView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingVertical: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: '18',
    fontWeight: 500,
  },
  closeButton: {
    position:"absolute",
    left: -10,
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    marginHorizontal: 15,
  },
});

export default CreateSelectModal;
