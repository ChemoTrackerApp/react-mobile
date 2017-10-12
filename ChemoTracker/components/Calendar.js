import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/main.js';
import color from '../styles/color.js';

class Calendar extends Component {
  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Calendar page</Text>
      </View>
    );
  }
}

export default Calendar;
