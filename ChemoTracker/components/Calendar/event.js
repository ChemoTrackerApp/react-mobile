import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
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
    const {symptomsList} = this.state;
    return (
      <View style={historyStyles.container}>
        {
          symptomsList.map((symptom, i) =>{
            return(
              <View key={i} style={historyStyles.historyContainer}>
                <View style={historyStyles.symptomContainer}>
                  <View style={historyStyles.circleContainer}>
                    <Image source={getFilePath(symptom.name.toLowerCase())}
                      style={historyStyles.symptomIcon}
                      key={`${i}_${symptom.name}`}/>
                  </View>
                  <Text style={historyStyles.historyText}>{symptom.name}</Text>
                  <View style={historyStyles.circleContainer}>
                    <View style={historyStyles.grade}>
                      <Text style={historyStyles.gradeText}>{symptom.grade}</Text>
                    </View>
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
