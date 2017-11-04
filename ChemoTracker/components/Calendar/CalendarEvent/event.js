import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
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
      date: props.navigation.state.params.date
    }
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  render() {
    console.log("props",this.props)
    return (
      <View style={styles.container}>
        <TextInput
          style={eventStyles.eventTitle}
          placeholder="Title"
        />
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2017-07-01"
          maxDate="2017-12-31"
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
          onDateChange={(date) => {this.setState({date: date})}}
        />
      </View>
    )
  }
}

export default CalendarEvent;
