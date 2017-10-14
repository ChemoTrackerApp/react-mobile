import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Agenda } from 'react-native-calendars';
import styles from '../styles/main.js';
import color from '../styles/color.js';

class Calendar extends Component {
  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  render() {
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth()+1;
    const year = d.getFullYear();
    const today = `${year}-${month}-${date}`;
    console.log("today", today);
    return (
      <View style={styles.container}>
        <Agenda
          style={{
            flex: 1,
            width: 370,
            height: 100
          }}
          selected={today}
          pastScrollRange={20}
          futureScrollChange={20}
          onDayPress={(day)=>{console.log('day pressed')}}
          onDayChange={(day)=>{console.log('day changed')}}
          rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
          theme={{
            agendaDayTextColor: 'yellow',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            agendaKnobColor: 'blue'
          }}
        />
      </View>
    );
  }
}

export default Calendar;
