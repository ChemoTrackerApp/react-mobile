import React, { Component } from 'react';
import { TextInput, Text, View, ScrollView, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';
import { getFilePath } from '../../services/symptomTracking.js';
import { calStyles, historyStyles, eventStyles } from '../../styles/calendar.js';
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
                <View style={historyStyles.symptomContainer}>
                  <Image source={getFilePath(symptom.name.toLowerCase())}
                    style={calStyles.symptomIcon}
                    key={`${i}_${symptom.name}`}/>
                  <Text style={historyStyles.historyText}>{symptom.name}</Text>
                  <View style={historyStyles.grade}>
                    <Text style={historyStyles.gradeText}>{symptom.grade}</Text>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default CalendarEvent;
