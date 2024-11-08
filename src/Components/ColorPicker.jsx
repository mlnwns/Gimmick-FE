import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const colors = ['#d4e9c1', '#d3d3f8', '#c5e5fa', '#f7e485', '#f4b5b5'];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#f7e485');

  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <Pressable
          key={index}
          onPress={() => setSelectedColor(color)}
          style={[styles.colorCircle, {backgroundColor: color}]}>
          {selectedColor === color && (
            <Icon name="check" size={15} color="white" />
          )}
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  colorCircle: {
    width: 24,
    marginHorizontal: 4,
    height: 24,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ColorPicker;
