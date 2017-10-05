import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class Search extends Component {
  static navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: () => (<Icon size={24} name="search" color="white" />)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Search page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search;
