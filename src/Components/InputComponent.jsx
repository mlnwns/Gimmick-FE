import React, {useState} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';

const InputComponent = ({style}) => {
  const [text, setText] = useState('');

  const onChangeText = inputText => {
    setText(inputText);
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.input} value={text} onChange={onChangeText}>
        {text === '' && (
          <Text style={styles.placeholder}>폴더명을 입력해주세요.</Text>
        )}
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor:"gray",
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 36,
    width: '100%',
    borderRadius: 10,
    borderColor: '#808080',
    textAlign: 'left',
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'left',
  },

  placeholder: {
    color: '#808080',
    fontSize: 12,
  }
});

export default InputComponent;
