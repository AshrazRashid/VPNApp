import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, CountryScreen} from '../screens';

const Tab = createBottomTabNavigator();

const rootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Country" component={CountryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default rootNavigator;
