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

let token = '';

class Calendar extends Component {
  constructor(props){
    super(props);
    console.log("props of calendar", props);
    this.state = {
      calendarItems: {}
    }
    this.onDayPress = this.onDayPress.bind(this);
    this.onDayChange = this.onDayChange.bind(this);
    this.rowHasChanged = this.rowHasChanged.bind(this);
    this.seeSymptomDetails = this.seeSymptomDetails.bind(this);
    this.getTimeString = this.getTimeString.bind(this);
    this.convertToDoubleDigit = this.convertToDoubleDigit.bind(this);
    this.getDateStringFromDay = this.getDateStringFromDay.bind(this);
    this.getItemsByMonth = this.getItemsByMonth.bind(this);
    this.loadItemsMonthly = this.loadItemsMonthly.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  loadItemsMonthly(ds){
    login()
    .then(t => {
      token = t;
      getSymptoms()
      .then(symptomsList => {
        this.getItemsByMonth(ds, symptomsList);
      })
      .catch(err => {
        console.log(err);
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  getItemsByMonth(ds, symptomsList) {
    console.log("ds: ", ds);
    const year = moment(ds).format('YYYY');
    const month = moment(ds).format('M');

    console.log("ds.year", year);
    console.log("ds.month", month);
    getSymptomsByMonth(year, month, token.key)
    .then(list => {
      // map the list with appropriate data for FE
      let mappedList = [];
      mappedList = list.Symptoms.map(item => {
        const symptomObj = _.find(symptomsList.symptom, ['id', item.symptom]);
        const dateTime = item.recorded_at;
        const dateIndex = dateTime.indexOf(' ');
        const date = dateTime.substring(0, dateIndex);
        const year = moment(date).format('YYYY');
        const month = moment(date).format('M');
        const day = moment(date).format('D');
        // convert to local time
        const hour = dateTime.substring(dateIndex+1, dateTime.length - 6);
        const utcTime = moment.utc([year, month-1, day, hour]);
        const localDate = utcTime.local().format('YYYY-MM-DD');
        const localHour = this.convertToDoubleDigit(utcTime.local().hours());
        const timeString = localHour+':00';

        return {
          symptom: symptomObj.name,
          grade: item.grade,
          dateString: localDate,
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
      // let m = this.state.listOfItems;
      // let tempMonth = month;
      // if(month < 10) tempMonth = `0${month}`;
      // m[`${year}${tempMonth}`] = itemList; // add to complete list of calendar items
      // // only have list for 3 months
      // let keyList = _.keys(m);
      // let newList = {};
      // keyList.forEach(key => {
      //
      //   console.log("key", key);
      //   console.log(key - `${year}${tempMonth}`);
      //   if((key - `${year}${tempMonth}`) >= -1 && (key - `${year}${tempMonth}`) <= 1) {
      //     // within range of +1/-1 of the month
      //     newList[key] = m[key];
      //   }
      // });
      // // merge with new data from itemList
      // let newCalendarItems = {};
      // keyList = _.keys(newList);
      // keyList.forEach(key => {
      //   const listOfDates = _.keys(newList[key]);
      //   listOfDates.forEach(date => {
      //     newCalendarItems[date] = newList[key][date];
      //   });
      // });
      // const keyItems = _.keys(itemList);
      // keyItems.forEach(key => {
      //   newCalendarItems[key] = itemList[key];
      // });
      // console.log("newCalendarItems", newCalendarItems);
      this.setState({
        calendarItems: itemList
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderItem(item) {
    console.log("item", item);
    return (
      <View style={[calStyles.itemView, {height: item.height}]}>
        <TouchableOpacity
          onPress={() => this.seeSymptomDetails(item)}>
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

  seeSymptomDetails(item) {
    this.props.navigation.navigate(
      'CalendarEvent', {symptoms: item.symptoms}
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
    return r1.timeString !== r2.timeString;
  }

  render() {
    const d = new Date();
    const today = moment(d).format('YYYY-MM-DD');
    const { calendarItems } = this.state;
    console.log("calendarItems", calendarItems);
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Agenda
          ref={(agenda) => { this.agenda = agenda; }}
          loadItemsForMonth={(m) => {
            console.log("m in render", m)
            return this.loadItemsMonthly(m.dateString)
          }}
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
