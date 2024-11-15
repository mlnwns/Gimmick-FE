import React from 'react';
import {View} from 'react-native';
import ForderCreateModal from './Pages/FolderCreateModal';
import CreateSelectModal from './Pages/CreateSelectModal';
import MainPage from './Pages/MainPage';
import IconPickerModal from './Pages/IconPickerModal';

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
