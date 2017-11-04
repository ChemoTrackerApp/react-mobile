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
    this.state = {
      date: props.navigation.state.params.date,
      datetime: `${props.navigation.state.params.date} 20:00`
    }
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  buttonPressed() {
    console.log("buttonPressed");
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
            date={this.state.datetime}
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
            onDateChange={(datetime) => {this.setState({datetime1: datetime});}}
          />
        <Text>To</Text>
          <DatePicker
            style={{width: 200}}
            date={this.state.datetime}
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
            onDateChange={(datetime) => {this.setState({datetime1: datetime});}}
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
