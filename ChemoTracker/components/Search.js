import React from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';

const Search = ({ navigation }) => (
  <Navigation banner="Search Tab" navigation={navigation} />
);

Search.navigationOptions = {
  tabBarLabel: 'Search',
};

export default Search;
