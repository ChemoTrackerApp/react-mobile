import React, { Component } from 'react';
import { TextInput, Text, View, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import DatePicker from 'react-native-datepicker';
import styles from '../../../styles/main.js';
import color from '../../../styles/color.js';
import { eventStyles } from '../../../styles/calendar.js';

class CalendarEvent extends Component {

  constructor(props) {
    super(props);
    console.log("props", this.props);
    const params = props.navigation.state.params;
    this.state = {
      date: params.date,
      time: params.time,
      datetimeFrom: `${params.date} ${params.time}`,
      datetimeTo: `${params.date} ${params.time}`
    }
    this.buttonPressed = this.buttonPressed.bind(this);
    this.setDateTimeFrom = this.setDateTimeFrom.bind(this);
    this.toTimeString = this.toTimeString.bind(this);
    this.convertToDoubleDigit = this.convertToDoubleDigit.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  componentWillMount() {
    const dateStringTo = this.state.datetimeTo;
    const dateTimeArray = dateStringTo.split(' ');
    const timeString = dateTimeArray[1];
    const timeArray = timeString.split(':');
    let hour = this.convertToDoubleDigit(parseInt(timeArray[0]) + 1);
    if(hour === 24) {
      hour = '00';
    }
    this.setState({
      datetimeTo: `${this.props.navigation.state.params.date} ${hour}:00`
    });
  }

  convertToDoubleDigit(digit) {
    if(digit < 10) {
      return `0${digit}`;
    }
    return digit;
  }

  buttonPressed() {
    console.log("buttonPressed");
  }

  toTimeString(fullDate) {

  }

  setDateTimeFrom(dt) {
    console.log("dt", dt);
    this.setState({
      datetimeFrom: dt,
      datetimeTo: dt
    });
  }

  render() {
    console.log("props",this.props)
    return (
      <View style={styles.container}>
        <ScrollView>
          <TextInput
            style={eventStyles.eventTitle}
            placeholder="Title"
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
            onDateChange={(dt) => {this.setDateTimeFrom}}
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
            onDateChange={(dt) => {this.setState({datetimeTo: dt});}}
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
