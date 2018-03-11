import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StatusBar, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import { Agenda } from 'react-native-calendars';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';
import { calStyles } from '../../styles/calendar.js';
import CalendarEvent from './event.js';
import CalendarHeader from './CalendarHeader.js';
import _ from 'lodash';
import moment from 'moment';
import { getSymptoms, getSymptomsByMonth, login, getFilePath } from '../../services/symptomTracking.js';

let token = '';

class Calendar extends Component {
  constructor(props){
    super(props);
    console.log("props of calendar", props);
    this.state = {
      listOfItems: {},
      calendarItems: {}
    }
    this.onDayPress = this.onDayPress.bind(this);
    this.rowHasChanged = this.rowHasChanged.bind(this);
    this.seeSymptomDetails = this.seeSymptomDetails.bind(this);
    this.convertToDoubleDigit = this.convertToDoubleDigit.bind(this);
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
    const year = moment(ds).format('YYYY');
    const month = moment(ds).format('M');
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
      let m = this.state.listOfItems;
      let tempMonth = this.convertToDoubleDigit(month);
      m[`${year}-${tempMonth}-01`] = itemList; // add to complete list of calendar items
      // only have list for 3 months
      const monthBefore = moment(`${year}-${tempMonth}-01`).subtract(1, 'months').format('YYYY-MM-DD');
      const monthAfter = moment(`${year}-${tempMonth}-01`).add(1, 'months').format('YYYY-MM-DD');
      let keyList = _.keys(m);
      let newList = {};
      keyList.forEach(key => {
        if(key == monthBefore || key == monthAfter) {
          // within range of +1/-1 of the month
          newList[key] = m[key];
        }
      });
      // merge with new data from itemList
      let newCalendarItems = {};
      keyList = _.keys(newList);
      keyList.forEach(key => {
        const listOfDates = _.keys(newList[key]);
        listOfDates.forEach(date => {
          newCalendarItems[date] = newList[key][date];
        });
      });
      const keyItems = _.keys(itemList);
      keyItems.forEach(key => {
        newCalendarItems[key] = itemList[key];
      });
      this.setState({
        calendarItems: newCalendarItems
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderItem(item) {
    let i = 0;
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
          </Text>
          <View style={calStyles.iconContainer}>
            {
              item.symptoms.map(symptom => {
                i++;
                return (
                  <Image source={getFilePath(symptom.name.toLowerCase())}
                  style={calStyles.symptomIcon}
                  key={`${i}_${symptom.name}`}/>
                )
              })
            }
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderEmptyDate(day) {
    return null;
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

  rowHasChanged(r1, r2) {
    return r1.dateString !== r2.dateString;
  }

  render() {
    const d = new Date();
    const today = moment(d).format('YYYY-MM-DD');
    const { calendarItems } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Agenda
          ref={(agenda) => { this.agenda = agenda; }}
          loadItemsForMonth={(m) => {
            return this.loadItemsMonthly(m.dateString)
          }}
          items={calendarItems}
          selected={today}
          pastScrollRange={6}
          futureScrollRange={1}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          onDayPress={(day)=> this.onDayPress(day)}
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
