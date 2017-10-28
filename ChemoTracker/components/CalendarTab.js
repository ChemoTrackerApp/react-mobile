import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import Calendar from './Calendar/Calendar.js';
import CalendarEvent from './Calendar/CalendarEvent/event.js';
import { headerStyles } from '../styles/calendar.js';

const CalendarTab = StackNavigator({
  Calendar: {
    screen: Calendar,
    path: 'calendar',
    navigationOptions: {
      title: 'Calendar',
      headerStyle: headerStyles.headerBackground,
      headerTitleStyle: headerStyles.headerTitleStyle,
      headerBackTitleStyle: headerStyles.headerBackTitleStyle
    }
  },
  CalendarEvent: {
    screen: CalendarEvent,
    path: 'calendar/event',
    navigationOptions: {
      title: 'Event',
      headerStyle: headerStyles.headerBackground,
      headerTitleStyle: headerStyles.headerTitleStyle,
      headerBackTitleStyle: headerStyles.headerBackTitleStyle
    }
  }
})

export default CalendarTab;
