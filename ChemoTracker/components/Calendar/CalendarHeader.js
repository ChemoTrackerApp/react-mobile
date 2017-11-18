import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';
import { calStyles } from '../../styles/calendar.js';
import CalendarEvent from './CalendarEvent/event.js';
import _ from 'lodash';
import moment from 'moment';

class CalendarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: {}
    };
    this.createEvent = this.createEvent.bind(this);
    this.getTimeString = this.getTimeString.bind(this);
    this.convertToDoubleDigit = this.convertToDoubleDigit.bind(this);
    console.log("props in create header", props);
  }

  createEvent() {
    const p = this.props;
    let d = moment();
    let dateString = moment().format('YYYY-MM-DD');
    let timeString = this.getTimeString(d);

    if(p.navigation.params) {
      d = new Date(p.navigation.params.date.timestamp);
      dateString = p.navigation.params.date.dateString;
      timeString = this.getTimeString(d);
    }

    if(timeString === "00:00") {
      // add 1 to the day
      dateString = moment(dateString).add(1, 'days').format('YYYY-MM-DD');
    };
    this.props.navigate(
      'CalendarEvent',
      {
        date: dateString,
        time: {
          from: timeString,
          to: timeString
        }
      }
    );
  }

  getTimeString(d) {
    console.log("d in header getTimeString", d);
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

  render() {
    return(
      <TouchableOpacity
        onPress={this.createEvent}>
        <Icon
          size={24}
          name="plus"
          color='#000000' />
      </TouchableOpacity>
    )
  }
}

export default CalendarHeader;
