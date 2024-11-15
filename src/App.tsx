import React from 'react';
import {StyleSheet, View} from 'react-native';
import ForderCreateModal from './Pages/FolderCreateModal';
import CreateSelectModal from './Pages/CreateSelectModal';
import Header from './Components/Header';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ForderCreateModal />
      <CreateSelectModal />
      <Header type="main" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
