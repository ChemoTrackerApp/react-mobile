import React, { Component } from 'react';
import { TextInput, Text, View, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import DatePicker from 'react-native-datepicker';
import styles from '../../../styles/main.js';
import color from '../../../styles/color.js';
import { eventStyles } from '../../../styles/calendar.js';
import _ from 'lodash';
import moment from 'moment';

class CalendarEvent extends Component {

  constructor(props) {
    super(props);
    console.log("props", this.props);
    const params = props.navigation.state.params;
    this.state = {
      date: params.date,
      time: params.time,
      datetimeFrom: `${params.date} ${params.time}`,
      datetimeTo: `${params.date} ${params.time}`,
      title: params.title
    }
    this.buttonPressed = this.buttonPressed.bind(this);
    this.getTimeTo = this.getTimeTo.bind(this);
    this.addOneToDateString = this.addOneToDateString.bind(this);
    this.subtractOneToDateString = this.subtractOneToDateString.bind(this);
    this.setDateTimeFrom = this.setDateTimeFrom.bind(this);
    this.convertToDoubleDigit = this.convertToDoubleDigit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  componentWillMount() {
    const dateStringTo = this.state.datetimeTo;
    const hour = this.getTimeTo(dateStringTo);
    let dateString  = this.state.date;
    if(hour === "00") {
      dateString = addOneToDateString(dateString, 'days', 'date');
    }
    this.setState({
      datetimeTo: `${dateString} ${hour}:00`
    });
  }

  buttonPressed() {
    console.log("buttonPressed");
  }

  getTimeFrom(dateString) {
    const dateTimeArray = dateString.split(' ');
    const timeString = dateTimeArray[1];
    const timeArray = timeString.split(':');
    let hour = timeArray[0];
    if(hour === '00') {
      hour = '24';
    }
    hour = this.convertToDoubleDigit(parseInt(hour) - 1);
    return hour;
  }

  getTimeTo(dateString) {
    const dateTimeArray = dateString.split(' ');
    const timeString = dateTimeArray[1];
    const timeArray = timeString.split(':');
    let hour = this.convertToDoubleDigit(parseInt(timeArray[0]) + 1);
    if(hour === 24) {
      hour = '00';
    }
    return hour;
  }

  addOneToDateString(dateString, type, formatType) {
    let format = 'YYYY-MM-DD';
    if(formatType === 'dateTime') {
      format = 'YYYY-MM-DD HH:mm';
    } else if(formatType === 'time') {
      format = 'HH:mm';
    }
    return moment(dateString).add(1, type).format(format);
  }

  subtractOneToDateString(dateString, type, formatType) {
    let format = 'YYYY-MM-DD';
    if(formatType === 'dateTime') {
      format = 'YYYY-MM-DD HH:mm';
    } else if(formatType === 'time') {
      format = 'HH:mm';
    }
    return moment(dateString).subtract(1, type).format(format);
  }

  setDateTimeFrom(dt) {
    let dateString = _.clone(dt);
    const hour = this.getTimeTo(dt);
    if(hour === "00") {
      dateString = this.addOneToDateString(dt, 'days', 'date');
    }
    this.setState({
      datetimeFrom: dateString
    });
  }

  setDateTimeTo(dt) {
    let dateStringFrom = _.clone(this.state.datetimeFrom);
    let fromDateTime = moment(this.state.datetimeFrom, 'YYYY-MM-DD HH:mm');
    const toDateTime = moment(dt, 'YYYY-MM-DD HH:mm');

    if(toDateTime.isBefore(fromDateTime)) {
      dateStringFrom = this.subtractOneToDateString(dt, 'hours', 'dateTime');
    }
    // TO DO: check for 00 and 23 to change dateString
    // also refactor the code to check it
    this.setState({
      datetimeFrom: dateStringFrom,
      datetimeTo: dt
    })
  }

  convertToDoubleDigit(digit) {
    if(digit < 10) {
      return `0${digit}`;
    }
    return digit;
  }



  onTitleChange(text) {
    console.log("new text", text);
    this.setState({
      title: text
    });
  }

  render() {
    console.log("state",this.state)
    return (
      <View style={styles.container}>
        <ScrollView>
          <TextInput
            style={eventStyles.eventTitle}
            placeholder="Title"
            value={this.state.title ? this.state.title : ''}
            onChangeText={this.onTitleChange}
          />
        <Text>From</Text>
          <DatePicker
            style={{width: 200}}
            date={this.state.datetimeFrom}
            mode="datetime"
            format="YYYY-MM-DD HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            minuteInterval={10}
            onDateChange={(dt) => {this.setDateTimeFrom(dt)}}
          />
        <Text>To</Text>
          <DatePicker
            style={{width: 200}}
            date={this.state.datetimeTo}
            mode="datetime"
            format="YYYY-MM-DD HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            minuteInterval={10}
            onDateChange={(dt) => {this.setDateTimeTo(dt)}}
          />
        <View style={{flexDirection: 'row', height: 80, padding: 20}}>
          <Button title="Cancel" onPress={this.buttonPressed}/>
          <Button title="Save" onPress={this.buttonPressed}/>
        </View>
        </ScrollView>
      </View>
    )
  }
}

export default CalendarEvent;
