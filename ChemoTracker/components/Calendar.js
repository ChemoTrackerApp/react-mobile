import React from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';

const Calendar = ({ navigation }) => (
  <Navigation banner="Calendar Tab" navigation={navigation} />
);

Calendar.navigationOptions = {
  tabBarLabel: 'Calendar',
};

export default Calendar;
