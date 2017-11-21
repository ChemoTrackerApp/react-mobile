import React from 'react';
import { Platform } from 'react-native';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from './components/Home.js';
import Track from './components/Track.js';
import Profile from './components/Profile.js';
import Search from './components/Search.js';
import PatientEducation from './components/PatientEducation.js';
import PatientEducationResult from './components/PatientEducationResult.js';
import Forum from './components/Forum.js';
import Calendar from './components/Calendar.js';
import color from './styles/color.js';

const SearchNavigator = StackNavigator({
  Search: { screen: Search, path: 'search' },
  PatientEducation: { screen: PatientEducation, path: 'patient-education' },
  PatientEducationResult: { screen: PatientEducationResult, path: 'patient-education-result' },
  Forum: { screen: Forum, path: 'forum' }
}, {
  initialRouteName: 'Search',
  headerMode: 'none'
});

const App = TabNavigator({
  Home: { screen: Home, path: '' },
  Track: { screen: Track, path: 'track' },
  Search: { screen: SearchNavigator, path: 'search' },
  Calendar: { screen: Calendar, path: 'calendar' },
  Profile: { screen: Profile, path: 'profile' }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: color.navBarLabel,
      rippleColor: color.navBarRipple,
      tabs: {
        Home: { barBackgroundColor: color.navBarBackground },
        Profile: { barBackgroundColor: color.navBarBackground },
        Track: { barBackgroundColor: color.navBarBackground },
        Search: { barBackgroundColor: color.navBarBackground },
        Calendar: { barBackgroundColor: color.navBarBackground }
      }
    }
  }
});

export default App;
