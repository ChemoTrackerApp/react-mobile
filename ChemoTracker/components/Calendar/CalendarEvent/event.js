import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import styles from '../../../styles/main.js';
import color from '../../../styles/color.js';
import { eventStyles } from '../../../styles/calendar.js';

class CalendarEvent extends Component {

  constructor(props) {
    super(props);

  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={eventStyles.eventTitle}
          placeholder="Title"
        />

      </View>
    )
  }
}

export default CalendarEvent;
