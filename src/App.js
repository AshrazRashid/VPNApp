import React from 'react';
import {StatusBar} from 'react-native';
import {store} from './store';
import RootNavigator from './navigation/index';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'blue'} />
      <RootNavigator />
    </Provider>
  );
};

export default App;
