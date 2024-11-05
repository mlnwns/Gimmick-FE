import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const IconPicker = () => {
  const [icon, setIcon] = useState('🌮'); // 기본 이모티콘 설정

  // 이모티콘 선택 함수
  const selectIcon = (icon) => {
    setIcon('🌮');
  };

  return (
    <View style={styles.container}>
      {/* 선택된 이모티콘을 표시 */}
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>{icon}</Text>
        <View style={styles.plusIcon}>
          <Text style={styles.plusText}>+</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // padding: 20,
  },

  iconContainer: {
    position: 'relative',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  iconText: {
    fontSize: 35,
  },

  plusIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor: "#B9B9B9",
},

  plusText: {
    fontSize: 15,
    // fontWeight: 'bold',/
    color: '#888',
  },

  icon: {
    fontSize: 30,
    marginHorizontal: 10,
  },
});

export default IconPicker;