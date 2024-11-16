import React from 'react';
import {View} from 'react-native';
import ForderCreateModal from './pages/FolderCreateModal';
import CreateSelectModal from './pages/CreateSelectModal';
import MainPage from './pages/MainPage';
import IconPickerModal from './pages/IconPickerModal';

function App(): React.JSX.Element {
  return (
    <View>
      <MainPage />
      <ForderCreateModal />
      <CreateSelectModal />
      <IconPickerModal />
    </View>
  );
}

export default App;
