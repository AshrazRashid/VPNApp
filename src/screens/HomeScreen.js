import * as React from 'react';
import {Text, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const HomeScreen = () => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    loadProgress();
  });

  const loadProgress = () => {
    let val = 0;
    setTimeout(() => {
      setCounter(val++);
    }, 3000);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress
        value={60}
        radius={120}
        duration={2000}
        progressValueColor={'#ecf0f1'}
        maxValue={200}
        title={'KM/H'}
        titleColor={'white'}
        titleStyle={{fontWeight: 'bold'}}
      />
    </View>
  );
};

export default HomeScreen;
