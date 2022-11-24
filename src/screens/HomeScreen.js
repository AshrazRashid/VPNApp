import * as React from 'react';
import {Pressable, Text, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

let val = 0;
const HomeScreen = () => {
  const [counter, setCounter] = React.useState(3);

  React.useEffect(() => {
    loadProgress();
  });

  const loadProgress = () => {
    setTimeout(() => {
      let counterValue = counterValue--;
      setCounter(counterValue);
    }, 3000);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress
        value={counter}
        radius={120}
        duration={2000}
        progressValueColor={'#ecf0f1'}
        maxValue={3}
        title={'KM/H'}
        titleColor={'white'}
        titleStyle={{fontWeight: 'bold'}}>
        <Pressable>
          <Text>{'Connect'}</Text>
        </Pressable>
      </CircularProgress>
    </View>
  );
};

export default HomeScreen;
