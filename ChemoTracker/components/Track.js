import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/main.js';

class Track extends Component {
  static navigationOptions = {
    tabBarLabel: "Track",
    tabBarIcon: () => (<Icon size={24} name="heartbeat" color="#EF7A5A" />)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Track page</Text>
      </View>
    );
  }
}

export default Track;
