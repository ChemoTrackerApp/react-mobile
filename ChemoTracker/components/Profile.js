import React from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';

const Profile = ({ navigation }) => (
  <Navigation banner="Profile Tab" navigation={navigation} />
);

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
};

export default Profile;
