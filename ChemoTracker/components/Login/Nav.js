import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login.js';
import SignUp from './SignUp.js';
import MenuNavigation from '../../MenuNavigation.js'

const loginStackNav = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  Menu: {
    screen:  MenuNavigation,
    navigationOptions: {
      header: null
    }
  }
})
export default loginStackNav;
