import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {store} from './store';
import RootNavigator from './navigation/index';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'blue'} />
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
