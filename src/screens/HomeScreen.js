import * as React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {AppButton, Container} from '../component';

const HomeScreen = () => {
  const [counter, setCounter] = React.useState(3);

  const _onConnectPress = () => {
    setTimeout(() => {
      let counterValue = counterValue >= 0 ? counterValue-- : 0;
      setCounter(counterValue);
    }, 3000);
  };

  return (
    <Container>
      <CircularProgress
        value={counter}
        radius={120}
        duration={2000}
        progressValueColor={'#ecf0f1'}
        maxValue={3}
        // title={counter}
        // titleColor={'green'}
      />

      <AppButton onPress={_onConnectPress} buttonTitle={'CONNECT'} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  textStyle: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonStyle: {
    marginTop: '50%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'green',
    padding: 25,
  },
});

export default HomeScreen;
