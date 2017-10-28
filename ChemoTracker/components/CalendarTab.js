import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import Calendar from './Calendar/Calendar.js';
import CalendarEvent from './Calendar/CalendarEvent/event.js';

const CalendarTab = StackNavigator({
  Calendar: {
    screen: Calendar,
    path: 'calendar',
    navigationOptions: {
      title: 'Calendar'
    }
  },
  CalendarEvent: {
    screen: CalendarEvent,
    path: 'calendar/event',
    navigationOptions: {
      title: 'Event'
    }
  }
})

export default CalendarTab;
