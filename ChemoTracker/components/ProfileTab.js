import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Profile from './Profile/Profile.js';
import ProfileEdit from './Profile/ProfileEdit.js';
import ProfileTop from './Profile/ProfileTop.js';
import color from '../styles/color.js';

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
      title: "Edit Profile",
      headerStyle: {
        backgroundColor: color.profileBackgroundDarkBlue,
      },
      headerTintColor: color.white,
      headerTitleStyle: {
        color: color.white,
        fontSize: 18
      },
    }
  },
});

export default ProfileTab;
