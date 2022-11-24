import * as React from 'react';
import {Text, View} from 'react-native';
import {Container} from '../component';

import getcountries from 'react-native-get-countries';
import {FlatList} from 'react-native-gesture-handler';

const CountryScreen = () => {
  const Item = ({item}) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.iso}</Text>
    </View>
  );
  return (
    <Container>
      <FlatList data={getcountries} renderItem={Item} />
      <Text>Country!</Text>
    </Container>
  );
};

export default CountryScreen;
