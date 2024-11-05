/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import ForderCreateModal from './Pages/FolderCreateModal';
import CreateSelectModal from './Pages/CreateSelectModal';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ForderCreateModal />
      <CreateSelectModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "gray",
  },
});

export default App;
