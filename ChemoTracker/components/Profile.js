import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/main.js';
import color from '../styles/color.js';

class Profile extends Component {
  static navigationOptions = {
    tabBarLabel: "Profile",
    tabBarIcon: () => (<Icon size={24} name="person" color={color.navBarIcon} />)
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
