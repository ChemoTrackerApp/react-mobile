import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Profile extends Component {
  // const profileIcon = (<Icon size={24} name="person" color="white" />);
  static navigationOptions = {
    tabBarLabel: "Profile",
    tabBarIcon: () => (<Icon size={24} name="person" color="white" />)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Profile page</Text>
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

export default Profile;
