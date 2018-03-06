import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../Profile.js';
import ProfileEditScreen from './ProfileEdit.js';

const profileStackNav = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null
    }
  },
  ProfileEdit: {
    screen: ProfileEditScreen,
    navigationOptions: {
      header: null
    }
  }
});
export default profileStackNav;
