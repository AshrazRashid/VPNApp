import * as React from 'react';
import {StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {AppButton, Container} from '../component';

const HomeScreen = () => {
  const [counter, setCounter] = React.useState(3);

  const _onConnectPress = () => {
    setCounter(prevCount => prevCount++);
    // setTimeout(() => {
    //   setCounter(prevCount => prevCount++);
    // }, 3000);
    // if (counter > 0) {

    // } else {
    //   setCounter(0);
    // }

    // setCounter(prevCount => prevCount + 1);
  };

  return (
    <Container style={styles.container}>
      <CircularProgress
        value={counter}
        radius={120}
        duration={3000}
        progressValueColor={'#ecf0f1'}
        maxValue={3}
      />

      <AppButton onPress={_onConnectPress} buttonTitle={'CONNECT'} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
