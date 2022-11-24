import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Container, CountryItem} from '../component';
import getcountries from 'react-native-get-countries';

const CountryScreen = () => {
  const [countries, setCountries] = React.useState([]);

  useEffect(() => {
    getcountries()
      .then(res => setCountries(res))
      .catch(err => console.log('err', err));
  }, [countries]);

  const renderItem = ({item}) => (
    <CountryItem item={item} onItemPress={() => console.log()} />
  );

  return (
    <Container>
      <FlatList
        keyExtractor={(item, index) => item + index}
        initialNumToRender={10}
        style={styles.container}
        data={countries}
        renderItem={renderItem}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CountryScreen;
