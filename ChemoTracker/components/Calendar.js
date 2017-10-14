import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Agenda } from 'react-native-calendars';
import styles from '../styles/main.js';
import color from '../styles/color.js';

class Calendar extends Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  renderItem(item) {
    return (
      <View style={[style.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  render() {
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth()+1;
    const year = d.getFullYear();
    const today = `${year}-${month}-${date}`;
    const calendarItems = {
      '2017-10-22': [{text: 'item 1 - any js object'}],
      '2017-10-23': [{text: 'item 2 - any js object'}],
      '2017-10-24': [],
      '2017-10-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
    }
    return (
      <View style={styles.container}>
        <Agenda
          items={calendarItems}
          selected={today}
          pastScrollRange={20}
          futureScrollChange={20}
          onDayPress={(day)=>{console.log('day pressed')}}
          onDayChange={(day)=>{console.log('day changed')}}
          rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          theme={{
            agendaDayTextColor: 'black',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            agendaKnobColor: 'blue'
          }}
          style={{
            flex: 1,
            width: 370,
            height: 100
          }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  }
});

export default Calendar;
