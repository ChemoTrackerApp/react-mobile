import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/main.js';

class Search extends Component {
  static navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: () => (<Icon size={24} name="search" color="#EF7A5A" />)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Search page</Text>
      </View>
    );
  }
}

export default Search;
