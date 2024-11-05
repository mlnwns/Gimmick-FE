import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const CreateButton = ({text, icon, style}) => {

    const onPress =() =>{
        // 생성 함수 구현
    };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {icon}
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  }
  ,
  text: {
    marginTop: 5,
    fontSize: 15,
    textAlign: "center",
  },
});

export default CreateButton;
