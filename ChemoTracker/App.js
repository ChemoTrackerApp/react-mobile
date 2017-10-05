import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './components/Home.js';
import Track from './components/Track.js';
import Profile from './components/Profile.js';
import Search from './components/Search.js';
import Calendar from './components/Calendar.js';

const App = TabNavigator({
  Home: { screen: Home, path: '' },
  Track: { screen: Track, path: 'track' },
  Profile: { screen: Profile, path: 'profile' },
  Search: { screen: Search, path: 'search' },
  Calendar: { screen: Calendar, path: 'calendar' },
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  },
  tabBarPosition: 'bottom'
});

export default App;
