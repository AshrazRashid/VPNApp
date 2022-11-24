import * as React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';

const AppButton = props => {
  const {onPress, buttonTitle} = props;
  return (
    <Pressable style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
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
