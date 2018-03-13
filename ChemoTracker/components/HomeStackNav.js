import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TrackTab from './TrackTab.js';
import Home from './Home.js';

const HomeStackNav = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Tracking: {
    screen: TrackTab,
    navigationOptions: {
      header: null
    }
  }
}, {
  navigationOptions:({navigation,screenProps})=>({
    tabBarOnPress: (tab, jumpToIndex) => {
      jumpToIndex(tab.index)
      navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' }) // go to first screen of the StackNavigator
        ]
      }))
    }
  }),
  headerMode:'none'
  }
)
export default HomeStackNav;
