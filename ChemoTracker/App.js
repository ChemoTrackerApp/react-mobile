import React from 'react';
import { Platform } from 'react-native';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator } from 'react-navigation';
import Home from './components/Home.js';
import ProfileTab from './components/ProfileTab.js';
import PatientEducationTab from './components/PatientEducationTab.js';
import CalendarTab from './components/CalendarTab.js';
import TrackTab from './components/TrackTab.js';
import color from './styles/color.js';

const App = TabNavigator({
  Home: { screen: Home, path: '' },
  Track: { screen: TrackTab, path: 'track' },
  Search: { screen: PatientEducationTab, path: 'search' },
  Calendar: { screen: CalendarTab, path: 'calendar' },
  Profile: { screen: ProfileTab, path: 'profile' }
}, {
  initialRouteName: 'Home',
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
