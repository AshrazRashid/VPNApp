import * as React from 'react';
import {Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

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
      <ProgressCircle
        percent={counter}
        radius={50}
        borderWidth={8}
        color="#3399FF"
        shadowColor="#999"
        bgColor="#fff">
        <Text style={{fontSize: 18}}>{`${counter}%`}</Text>
      </ProgressCircle>
    </View>
  );
};

export default HomeScreen;
