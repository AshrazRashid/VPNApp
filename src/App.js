/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {store} from './src/store';
import RootNavigator from './navigation/index';

import {Provider} from 'react-redux';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

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
