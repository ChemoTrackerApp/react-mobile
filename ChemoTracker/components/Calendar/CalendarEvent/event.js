import React, { Component } from 'react';
import { Text, View, Button, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import styles from '../../../styles/main.js';
import color from '../../../styles/color.js';
import calStyles from '../../../styles/calendar.js';

class CalendarEvent extends Component {

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
      </View>
    )
  }
}

export default CalendarEvent;
