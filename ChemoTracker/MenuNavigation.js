import React from 'react';
import { Platform } from 'react-native';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeStackNav from './components/HomeStackNav.js';
import ProfileTab from './components/ProfileTab.js';
import PatientEducationTab from './components/PatientEducationTab.js';
import CalendarTab from './components/CalendarTab.js';
import color from './styles/color.js';
import { DeviceEventEmitter } from 'react-native'

const Menu = TabNavigator({
  Home: { screen: HomeStackNav, path: '' },
  Search: { screen: PatientEducationTab, path: 'search' },
  Calendar: { screen: CalendarTab, path: 'calendar' },
  Profile: { screen: ProfileTab, path: 'profile' }
}, {
    initialRouteName: 'Home',
    tabBarComponent: ({ jumpToIndex, ...props }) => (
      <TabBarBottom
        {...props}
        jumpToIndex={index => {
          const { dispatch, state } = props.navigation
          if (state.index === index) {
            const stackRouteName = ['Home', 'Search', 'Calendar', 'Profile'][index]

            dispatch(NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: stackRouteName })],
            }))
          } else {
            jumpToIndex(index)
          }
        }}
      />
    ),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: color.navBarLabel,
        rippleColor: color.navBarRipple,
        tabs: {
          Home: { barBackgroundColor: color.navBarBackground },
          Profile: { barBackgroundColor: color.navBarBackground },
          Search: { barBackgroundColor: color.navBarBackground },
          Calendar: { barBackgroundColor: color.navBarBackground }
        }
      }
    }
  });

export default Menu;
