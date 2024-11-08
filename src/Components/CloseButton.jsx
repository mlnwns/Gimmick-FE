import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CloseButton = ({style}) => {
  const close = () => {
    //등록함수 구현
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.button}>
        <Icon name="close" size={18} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  button: {
    height: 30,
    paddingHorizontal: 30,
    alignItems: 'left',
    justifyContent: 'center',
  },
});

export default CloseButton;
