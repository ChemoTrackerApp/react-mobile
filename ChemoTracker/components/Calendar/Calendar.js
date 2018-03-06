import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import { Agenda } from 'react-native-calendars';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';
import { calStyles } from '../../styles/calendar.js';
import CalendarEvent from './CalendarEvent/event.js';
import CalendarHeader from './CalendarHeader.js';
import _ from 'lodash';
import moment from 'moment';
import { getSymptoms, getSymptomsByMonth, login } from '../../services/symptomTracking.js';

class Calendar extends Component {
  constructor(props){
    super(props);
    console.log("props of calendar", props);
    this.state = {
      symptomsList: [],
      calendarItems: {}
    }
    this.onDayPress = this.onDayPress.bind(this);
    this.onDayChange = this.onDayChange.bind(this);
    this.rowHasChanged = this.rowHasChanged.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.toDateString = this.toDateString.bind(this);
    this.getTimeString = this.getTimeString.bind(this);
    this.convertToDoubleDigit = this.convertToDoubleDigit.bind(this);
    this.getDateStringFromDay = this.getDateStringFromDay.bind(this);
  }

  componentWillMount() {
    login()
    .then(token => {
      getSymptoms()
      .then(symptomsList => {
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth()+1;
        getSymptomsByMonth(year, month, token.key)
        .then(list => {
          // map the list with appropriate data for FE
          let mappedList = [];
          mappedList = list.Symptoms.map(item => {
            const symptomObj = _.find(symptomsList.symptom, ['id', item.symptom]);
            const dateTime = item.recorded_at;
            const dateIndex = dateTime.indexOf(' ');
            const date = dateTime.substring(0, dateIndex);
            const timeString = (dateTime.substring(dateIndex+1, dateTime.length - 5))+'00';

            return {
              symptom: symptomObj.name,
              grade: item.grade,
              dateString: date,
              timeString: timeString
            };
          });
          // make the list of items in a month
          const numDays = new Date(year, month, 0).getDate();
          let itemList = {};
          const groupByDate = _.groupBy(mappedList, 'dateString');
          for(let i = 1 ; i <= numDays ; i++) {
            const dateString = moment([year, month-1, i]).format('YYYY-MM-DD');
            itemList[dateString] = [];
            // get the data from the date, otherwise default to empty
            if(groupByDate[dateString]) {
              let ar = {};
              let dateItem = [];

              groupByDate[dateString].forEach(o => {
                if(!ar[o.timeString]) {
                  // add timeString to ar
                  ar[o.timeString] = {
                    symptoms: [{name: o.symptom, grade: o.grade}]
                  };
                } else{
                  // time already exist in the array
                  ar[o.timeString].symptoms.push({name: o.symptom, grade: o.grade});
                }
              });
              const timeList = _.keys(ar);
              timeList.forEach(key => {
                dateItem.push({
                  dateString: dateString,
                  timeString: key,
                  symptoms: ar[key].symptoms
                })
              });
              itemList[dateString] = dateItem;
            }
          }
          this.setState({
            calendarItems: itemList,
            symptomsList: symptomsList
          });
        })
        .catch(err => {
          console.log(err);
        })
      })
    })
    .catch(err => {
      console.log(err);
    })


  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  renderItem(item) {
    console.log("item", item);
    return (
      <View style={[calStyles.itemView, {height: item.height}]}>
        <TouchableOpacity
          onPress={() => this.editEvent(item)}>
          <Text
            style={calStyles.itemTime}>
            {item.timeString}
          </Text>
          <Text
            style={calStyles.itemText}>
          {
            item.symptoms.map(symptom => {
              return `${symptom.name} `
            })
          }
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderEmptyDate(day) {
    const dayEmpty = new Date(day);
    let dateString = this.getDateStringFromDay(dayEmpty);
    const timeString = this.getTimeString(dayEmpty);
    if(timeString === "00:00") {
      // add 1 to the day
      dateString = moment(dateString).add(1, 'days').format('YYYY-MM-DD');
    }
    return null;
  }

  toDateString(fullDate) {
    const fullDateString = moment(fullDate).format('YYYY-MM-DD');
    return fullDateString;
  }

  getDateStringFromDay(date) {
    const dateISO = date.toISOString();
    const dateString = moment(dateISO, 'YYYY-MM-DD').format('YYYY-MM-DD');
    return dateString;
  }

  getTimeString(d) {
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

  editEvent(item) {
    console.log("Edit Event!");
    this.props.navigation.navigate(
      'CalendarEvent',
      {
        date: item.dateString,
        time: {
          from: item.timeStringFrom,
          to: item.timeStringTo
        },
        title: item.text,
        type: 'edit'
      }
    );
  }

  onDayPress(day) {
    console.log("day pressed", day);
    this.props.navigation.setParams({date: day});
  }

  onDayChange(day) {
    console.log("day change", day);
  }

  rowHasChanged(r1, r2) {
    return r1.text !== r2.text;
  }

  render() {
    const d = new Date();
    const today = this.toDateString(d);
    const { calendarItems } = this.state;
    console.log("calendarItems", calendarItems);
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Agenda
          ref={(agenda) => { this.agenda = agenda; }}
          items={calendarItems}
          selected={today}
          pastScrollRange={6}
          futureScrollRange={1}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          onDayPress={(day)=> this.onDayPress(day)}
          onDayChange={(day)=> this.onDayChange(day)}
          rowHasChanged={(r1, r2) => this.rowHasChanged(r1, r2)}
          style={calStyles.agenda}
          theme={{
            agendaDayTextColor: 'black',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            agendaKnobColor: '#F36024'
          }}
        />
      </View>
    );
  }
}

export default Calendar;
