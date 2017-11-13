import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/main.js';
import color from '../styles/color.js';

class Search extends Component {
  static navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: () => (<Icon size={24} name="search" color={color.navBarIcon} />)
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
