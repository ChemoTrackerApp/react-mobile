import React, { Component } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import Calendar from './Calendar/Calendar.js';
import CalendarEvent from './Calendar/CalendarEvent/event.js';
import CalendarHeader from './Calendar/CalendarHeader.js';
import Maps from './Calendar/CalendarEvent/maps.js';
import { headerStyles } from '../styles/calendar.js';

const navOptions = ({navigation}) => (
  {
    title: 'Calendar',
    headerStyle: headerStyles.headerBackground,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerBackTitleStyle: headerStyles.headerBackTitleStyle,
    headerRight: <CalendarHeader
      state={'agenda'}
      navigation={navigation.state}
      navigate={navigation.navigate}/>
  }
)

const navOptionsEvent = ({navigation}) => (
  {
    title: 'Event',
    headerStyle: headerStyles.headerBackground,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerBackTitleStyle: headerStyles.headerBackTitleStyle,
    headerRight: <CalendarHeader
      state={'event'}
      navigation={navigation.state}
      navigate={navigation.navigate}/>
  }
)

const CalendarTab = StackNavigator({
  Calendar: {
    screen: Calendar,
    path: 'calendar',
    navigationOptions: navOptions
  },
  CalendarEvent: {
    screen: CalendarEvent,
    path: 'calendar/event',
    navigationOptions: navOptionsEvent
  },
  Maps: {
    screen: Maps,
    navigationOptions: {
      title: 'Maps',
      headerStyle: headerStyles.headerBackground,
      headerTitleStyle: headerStyles.headerTitleStyle,
      headerBackTitleStyle: headerStyles.headerBackTitleStyle
    }
  }
})

export default CalendarTab;
