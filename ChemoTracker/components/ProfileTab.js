import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Profile from './Profile/Profile.js';
import ProfileEdit from './Profile/ProfileEdit.js';
import ProfileTop from './Profile/ProfileTop.js';

const ProfileTab= StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },
  ProfileEdit: {
    screen: ProfileEdit,
    navigationOptions: {
      header: null
    }
  },
});

export default ProfileTab;
