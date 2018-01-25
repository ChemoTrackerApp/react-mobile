import React, { Component } from 'react';
import { Button } from 'react-native';
import { TabView, TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import Home from './Home.js';
import Track from './SymptomTracking/Track.js';
import Intervention from './SymptomTracking/Intervention.js';
import TrackHeader from './SymptomTracking/TrackHeader.js';
import { headerStyles } from '../styles/SymptomTracking/track.js';


const TrackTab = TabNavigator({
  Nausea: { screen: Home, path: '' },
  Vomiting: { screen: Home, path: '' },
  Fatigue: { screen: Home, path: '' },
  Diarrhea: { screen: Home, path: '' },
  Constipation: { screen: Home, path: '' },
  Mucositis: { screen: Home, path: '' },
  HandFootSyndrome: { screen: Home, path: '' },
  Rash: { screen: Home, path: '' },
  NailChanges: { screen: Home, path: '' }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {

  }
})

export default TrackTab;
