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
    this.onDayPress = this.onDayPress.bind(this);
    this.onDayChange = this.onDayChange.bind(this);
    this.rowHasChanged = this.rowHasChanged.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  renderItem(item) {
    console.log("item", item);
    return (
      <View style={[style.itemView, {height: item.height}]}>
        <Text style={style.itemText}>
          {item.text}
        </Text>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  onDayPress(day) {
    console.log("day pressed", day);
  }

  onDayChange(day) {
    console.log("day change", day);
  }

  rowHasChanged(r1, r2) {
    return r1.text !== r2.text;
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
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          onDayPress={(day)=> this.onDayPress(day)}
          onDayChange={(day)=> this.onDayChange(day)}
          rowHasChanged={(r1, r2) => this.rowHasChanged(r1, r2)}
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
  itemView: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  itemText: {
    color: 'black',
    fontSize: 16
  }
});

export default Calendar;
