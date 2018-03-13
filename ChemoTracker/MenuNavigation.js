import React from 'react';
import { Platform } from 'react-native';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeStackNav from './components/HomeStackNav.js';
import ProfileTab from './components/ProfileTab.js';
import PatientEducationTab from './components/PatientEducationTab.js';
import CalendarTab from './components/CalendarTab.js';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OctiIcon from 'react-native-vector-icons/Octicons';
import color from './styles/color.js';

const Menu = TabNavigator({
  Home: {
    screen: HomeStackNav,
    path: '',
    navigationOptions: {
      tabBarLabel: ({ focused, tintColor }) => (focused ? "Home" : null),
      tabBarIcon: ({ focused, tintColor }) => (<FontAwesomeIcon size={24} name="home" color={tintColor} />)
    },
  },
  Search: {
    screen: PatientEducationTab,
    path: 'search',
    navigationOptions: {
      tabBarLabel: ({ focused, tintColor }) => (focused ? "Search" : null),
      tabBarIcon: ({ focused, tintColor }) => (<FontAwesomeIcon size={24} name="search" color={tintColor} />)
    },
  },
  Calendar: {
    screen: CalendarTab,
    path: 'calendar',
    navigationOptions: {
      tabBarLabel: ({ focused, tintColor }) => (focused ? "Calendar" : null),
      tabBarIcon: ({ focused, tintColor }) => (<OctiIcon size={24} name="calendar" color={tintColor} />)
    },
  },
  Profile: {
    screen: ProfileTab,
    path: 'profile',
    navigationOptions: {
      tabBarLabel: ({ focused, tintColor }) => (focused ? "Profile" : null),
      tabBarIcon: ({ focused, tintColor }) => (<MaterialIcon size={24} name="person" color={tintColor} />)
    },
  }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: color.navBarIcon,
      inactiveTintColor: color.navBarRipple,
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      style: {
        backgroundColor: color.navBarBackground,
      },
    },
    animationEnabled: false,
    swipeEnabled: true,
  }
);

export default Menu;
