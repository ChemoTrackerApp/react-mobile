import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/main.js';

class Profile extends Component {
  static navigationOptions = {
    tabBarLabel: "Profile",
    tabBarIcon: () => (<Icon size={24} name="person" color="#EF7A5A" />)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Profile page</Text>
      </View>
    );
  }
}

export default Profile;
