import React from 'react';
import { Platform } from 'react-native';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator } from 'react-navigation';
import Home from './components/Home.js';
import Track from './components/Track.js';
import Profile from './components/Profile.js';
import Search from './components/Search.js';
import Calendar from './components/Calendar.js';

const App = TabNavigator({
  Home: { screen: Home, path: '' },
  Track: { screen: Track, path: 'track' },
  Search: { screen: Search, path: 'search' },
  Calendar: { screen: Calendar, path: 'calendar' },
  Profile: { screen: Profile, path: 'profile' }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        Home: {
          barBackgroundColor: '#37474F'
        },
        Profile: {
          barBackgroundColor: '#00796B'
        },
        Track: {
          barBackgroundColor: '#5D4037'
        },
        Search: {
          barBackgroundColor: '#f28b3c'
        },
        Calendar: {
          barBackgroundColor: '#5ae9fc'
        }
      }
    }
  }
});

export default App;
