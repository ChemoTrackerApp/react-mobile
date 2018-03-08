import React, { Component } from 'react';
import { TextInput, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import DatePicker from 'react-native-datepicker';
import styles from '../../../styles/main.js';
import color from '../../../styles/color.js';
import { historyStyles, eventStyles, datePickerStyles } from '../../../styles/calendar.js';
import _ from 'lodash';
import moment from 'moment';

class CalendarEvent extends Component {

  constructor(props) {
    super(props);
    console.log("props", this.props);
    const params = props.navigation.state.params;
    this.state = {
      symptomsList: params.symptoms,
    }
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  render() {
    console.log("state",this.state);
    const {symptomsList} = this.state;
    return (
      <View style={historyStyles.container}>
        {
          symptomsList.map((symptom, i) =>{
            return(
              <View key={i} style={historyStyles.historyContainer}>
                <TouchableOpacity style={historyStyles.symptomContainer}>
                  <Text style={historyStyles.historyText}>{symptom.name}</Text>
                  <View style={historyStyles.grade}>
                    <Text style={historyStyles.gradeText}>{symptom.grade}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default CalendarEvent;
