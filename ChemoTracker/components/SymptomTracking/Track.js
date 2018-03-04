import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FormScreen from './Form.js';
import InterventionScreen from './Intervention.js';

const trackStackNav = StackNavigator({
  Form: {
    screen: FormScreen,
    navigationOptions: {
      header: null
    }
  },
  Intervention: {
    screen: InterventionScreen,
    navigationOptions: {
      header: null
    }
  }
})
export default trackStackNav;
