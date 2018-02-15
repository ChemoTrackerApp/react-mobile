import React, { Component } from 'react';
import { Button, TouchableOpacity } from 'react-native';
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
    headerStyle: headerStyles.headerContainer,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerRight: <CalendarHeader
      state={'agenda'}
      navigation={navigation.state}
      navigate={navigation.navigate}/>
  }
)

const navOptionsEvent = ({navigation}) => (
  {
    title: 'History',
    headerStyle: headerStyles.headerContainer,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerTintColor: 'white',
    headerLeft: <TouchableOpacity onPress={ () => { navigation.goBack() }}
                  style={headerStyles.headerLeft}>
                  <Icon size={24} name="chevron-left"
                      color='#FFFFFF'/>
                </TouchableOpacity>,
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
      headerStyle: headerStyles.headerContainer,
      headerTitleStyle: headerStyles.headerTitleStyle
    }
  }
})

export default CalendarTab;
