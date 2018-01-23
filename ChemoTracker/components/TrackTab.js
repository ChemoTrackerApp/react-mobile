import React, { Component } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import Track from './SymptomTracking/Track.js';
import Intervention from './SymptomTracking/Intervention.js';
import TrackHeader from './SymptomTracking/TrackHeader.js';
import { headerStyles } from '../styles/SymptomTracking/track.js';


const navOptionsTrack = ({navigation}) => (
  {
    headerStyle: headerStyles.headerBackground,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerBackTitleStyle: headerStyles.headerBackTitleStyle,
    headerLeft: <TrackHeader
      state={'track'}
      navigation={navigation.state}
      navigate={navigation.navigate}/>
  }
)

const navOptionsIntervention = ({navigation}) => (
  {
    headerStyle: headerStyles.headerBackground,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerBackTitleStyle: headerStyles.headerBackTitleStyle,
    headerLeft: <TrackHeader
      state={'intervention'}
      navigation={navigation.state}
      navigate={navigation.navigate}/>
  }
)

const TrackTab = StackNavigator({
  Track: {
    screen: Track,
    path: 'track',
    navigationOptions: navOptionsTrack
  },
  Intervention: {
    screen: Intervention,
    path: 'intervention',
    navigationOptions: navOptionsIntervention
  }
})

export default TrackTab;