import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import { Agenda } from 'react-native-calendars';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';
import { calStyles } from '../../styles/calendar.js';
import CalendarEvent from './CalendarEvent/event.js';
import _ from 'lodash';
import moment from 'moment';

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
    this.getTimeString = this.getTimeString.bind(this);
    this.convertToDoubleDigit = this.convertToDoubleDigit.bind(this);
    this.getDateStringFromDay = this.getDateStringFromDay.bind(this);
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
    const dayEmpty = new Date(day);
    let dateString = this.getDateStringFromDay(dayEmpty);
    const timeString = this.getTimeString(dayEmpty);
    if(timeString === "00:00") {
      // parse dateString, and add 1 to the day
      dateString = moment(dateString).add(1, 'days').format('YYYY-MM-DD');
    }
    return (
      <View style={calStyles.emptyDate}>
        <Text style={calStyles.itemText}>
          No events for this date
        </Text>
        <TouchableOpacity
          onPress={() => this.createEvent(dateString, timeString)}>
          <Icon
            size={24}
            name="plus"
            color='#000000' />
        </TouchableOpacity>
      </View>
    );
  }

  toDateString(fullDate) {
    const fullDateString = moment(fullDate).format('YYYY-MM-DD');
    return fullDateString;
  }

  getDateStringFromDay(date) {
    const dateISO = date.toISOString();
    const dateString = moment(dateISO, 'YYYY-MM-DD').format('YYYY-MM-DD');
    return dateString;
  }

  getTimeString(d) {
    let today = new Date();
    let todayClone = _.clone(today);
    const offset = new Date().getTimezoneOffset();
    today.setMinutes(today.getMinutes() - offset); //turn into local time date object

    const todayISO = today.toISOString();
    const todaySubstring = todayISO.substring(0, todayISO.indexOf('T'));
    const dateISO = d.toISOString();
    const dateSubstring = dateISO.substring(0, dateISO.indexOf('T'));

    let timeString = '';
    if(dateSubstring === todaySubstring) {
      // get time now + 1 hour, eg 22.00 if 21.36 right now
      let hour = this.convertToDoubleDigit(todayClone.getHours() + 1);
      if(hour === 24) {
        hour = '00';
      }
      timeString = `${hour}:00`;
    } else {
      // set to 8 AM
      timeString = '08:00';
    }

    return timeString;
  }

  convertToDoubleDigit(digit) {
    if(digit < 10) {
      return `0${digit}`;
    }
    return digit;
  }

  createEvent(d, t) {
    console.log("Create event!");
    this.props.navigation.navigate(
      'CalendarEvent',
      { date: d, time: t }
    );
  }

  editEvent(date) {
    console.log("Edit Event!");
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
          ref={(agenda) => { this.agenda = agenda; }}
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
