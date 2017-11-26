import React, { Component } from 'react';
import { TextInput, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
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
      timeFrom: params.time.from,
      timeTo: params.time.to,
      datetimeFrom: `${params.date} ${params.time.from}`,
      datetimeTo: `${params.date} ${params.time.to}`,
      title: params.title,
      location: ''
    }
    this.addOneToDateString = this.addOneToDateString.bind(this);
    this.subtractOneToDateString = this.subtractOneToDateString.bind(this);
    this.setDateTimeFrom = this.setDateTimeFrom.bind(this);
    this.setDateTimeTo = this.setDateTimeTo.bind(this);
    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.cancelEvent = this.cancelEvent.bind(this);
    this.submitEvent = this.submitEvent.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  componentWillMount() {
    const dateStringFrom = moment(this.state.datetimeFrom, 'YYYY-MM-DD HH:mm');
    const dateStringTo = moment(this.state.datetimeTo, 'YYYY-MM-DD HH:mm');
    let dateTimeStringTo = this.state.datetimeTo;
    if(dateStringFrom.isSame(dateStringTo)) {
      dateTimeStringTo = this.addOneToDateString(dateStringFrom, 'hours', 'dateTime')
    }
    this.setState({
      datetimeTo: dateTimeStringTo
    });
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

  onTextInputChange(key, text) {
    console.log("new text", text);
    this.setState({
      [key]: text
    });
  }

  cancelEvent() {
    console.log("cancel event");
    this.props.navigation.navigate('Calendar');
  }

  submitEvent() {
    console.log("submit event");
    //submit to backend
    //navigate back to calendar
  }

  render() {
    console.log("state",this.state)
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={eventStyles.eventDetailView}>
            <TextInput
              style={eventStyles.eventTitle}
              placeholder="Title"
              value={this.state.title ? this.state.title : ''}
              onChangeText={text => this.onTextInputChange('title', text)}
            />
            <Text style={eventStyles.eventDateTimePickerText}>
              From
            </Text>
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
            <Text style={eventStyles.eventDateTimePickerText}>
              To
            </Text>
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

            <View style={eventStyles.locationView}>
              <Icon size={24} name="location" color={color.eventIcon} />
              <TextInput
                style={eventStyles.eventLocation}
                placeholder="Location"
                value={this.state.location ? this.state.location : ''}
                onChangeText={text => this.onTextInputChange('location', text)}
              />
            </View>
          </View>

          <View style={eventStyles.cancelSaveView}>
            <TouchableOpacity
              onPress={this.cancelEvent}
              style={eventStyles.cancelSaveButton}>
              <Text style={eventStyles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.submitEvent}
              style={eventStyles.cancelSaveButton}>
              <Text style={eventStyles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default CalendarEvent;
