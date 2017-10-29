import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import { Agenda } from 'react-native-calendars';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';
import { calStyles } from '../../styles/calendar.js';
import CalendarEvent from './CalendarEvent/event.js';

class Calendar extends Component {
  constructor(props){
    super(props);
    console.log("props", props);
    this.state = {
      currentDay: ''
    }
    this.onDayPress = this.onDayPress.bind(this);
    this.onDayChange = this.onDayChange.bind(this);
    this.rowHasChanged = this.rowHasChanged.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.toDateString = this.toDateString.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  renderItem(item) {
    console.log("item", item);
    return (
      <View style={[calStyles.itemView, {height: item.height}]}>
        <Text
          style={calStyles.itemText}>
          {item.text}
        </Text>
      </View>
    );
  }

  renderEmptyDate(day) {
    console.log("empty date", day);
    const dayEmpty = new Date(day);
    const dateString = this.toDateString(dayEmpty); // need to fix the day
    console.log("dateString", dateString);
    return (
      <View style={calStyles.emptyDate}>
        <Text style={calStyles.itemText}>
          No events for this date
        </Text>
        <TouchableOpacity
          onPress={this.createEvent}>
          <Icon
            size={24}
            name="plus"
            color='#000000' />
        </TouchableOpacity>
      </View>
    );
  }

  toDateString(fullDate) {
    const date = fullDate.getDate();
    const month = fullDate.getMonth()+1
    const year = fullDate.getFullYear();

    return `${year}-${month}-${date}`;
  }

  createEvent() {
    console.log("Create event!");
    this.props.screenProps = {
      day: '2017-10-28'
    }
    this.props.navigation.navigate('CalendarEvent');
  }

  editEvent(date) {
    console.log("Edit Event!");
    this.props.screenProps = {
      day: date
    }
    this.props.navigation.navigate('CalendarEvent');
  }

  onDayPress(day) {
    console.log("day pressed", day);
    this.setState({currentDay: day});
  }

  onDayChange(day) {
    console.log("day change", day);
  }

  rowHasChanged(r1, r2) {
    return r1.text !== r2.text;
  }

  render() {
    const d = new Date();
    const today = this.toDateString(d);
    const calendarItems = {
      '2017-10-22': [{
        text: 'item 1 - any js object',
        dateString: '2017-10-22'
      }],
      '2017-10-23': [{
        text: 'item 2 - any js object',
        dateString: '2017-10-23'
      }],
      '2017-10-24': [],
      '2017-10-25': [{
          text: 'item 3 - any js object',
          dateString: '2017-10-25'
        },
        {
          text: 'any js object',
          dateString: '2017-10-25'
      }],
      [today]: []
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
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
          style={calStyles.agenda}
          theme={{
            agendaDayTextColor: 'black',
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
