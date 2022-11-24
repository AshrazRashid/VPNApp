import * as React from 'react';
import {View, StyleSheet} from 'react-native';

const Container = props => {
  return <View style={styles.container}>{props.childern}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
