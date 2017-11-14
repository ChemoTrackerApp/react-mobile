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
    this.addOneToDateString = this.addOneToDateString.bind(this);
    this.subtractOneToDateString = this.subtractOneToDateString.bind(this);
    this.setDateTimeFrom = this.setDateTimeFrom.bind(this);
    this.setDateTimeTo = this.setDateTimeTo.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  componentWillMount() {
    const dateStringFrom = moment(this.state.datetimeFrom, 'YYYY-MM-DD HH:mm');
    const dateStringTo = this.addOneToDateString(dateStringFrom, 'hours', 'dateTime');
    this.setState({
      datetimeTo: dateStringTo
    });
  }

  buttonPressed() {
    console.log("buttonPressed");
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

  setDateTimeFrom(dtFrom) {
    let dateStringTo = _.clone(this.state.datetimeTo);
    let fromDateTime = moment(dtFrom, 'YYYY-MM-DD HH:mm');
    const toDateTime = moment(this.state.datetimeTo, 'YYYY-MM-DD HH:mm');

    // case when `From` is >= `To`
    if(fromDateTime.isAfter(toDateTime) || fromDateTime.isSame(toDateTime)) {
      dateStringTo = this.addOneToDateString(dtFrom, 'hours', 'dateTime');
    }

    this.setState({
      datetimeFrom: dtFrom,
      datetimeTo: dateStringTo
    });
  }

  setDateTimeTo(dtTo) {
    let dateStringFrom = _.clone(this.state.datetimeFrom);
    let fromDateTime = moment(this.state.datetimeFrom, 'YYYY-MM-DD HH:mm');
    const toDateTime = moment(dtTo, 'YYYY-MM-DD HH:mm');

    // case when `To` is <= `From`
    if(toDateTime.isBefore(fromDateTime) || toDateTime.isSame(fromDateTime) ) {
      dateStringFrom = this.subtractOneToDateString(dtTo, 'hours', 'dateTime');
    }

    this.setState({
      datetimeFrom: dateStringFrom,
      datetimeTo: dtTo
    })
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
