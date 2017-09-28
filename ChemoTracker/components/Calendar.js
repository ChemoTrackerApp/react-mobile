import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import TabNavigator from 'react-navigation';
import { Agenda, calendarTheme } from 'react-native-calendars';

class Calendar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: {}
//     };
//   }
//
//   render() {
//     // const today = new Date();
//     // const year = today.getFullYear();
//     // const month = today.getMonth();
//     // const day = today.getDay();
//     // const todayString = `${year}-${month}-${day}`;
//     return (
//       <Agenda
//         items={this.state.items}
//         loadItemsForMonth={this.loadItems.bind(this)}
//         selected={'2017-05-16'}
//         renderItem={this.renderItem.bind(this)}
//         renderEmptyDate={this.renderEmptyDate.bind(this)}
//         rowHasChanged={this.rowHasChanged.bind(this)}
//       />
//     );
//   }
//   loadItems(day) {
//     //will load all the agenda for the month
//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = this.timeToString(time);
//         if (!this.state.items[strTime]) {
//           this.state.items[strTime] = [];
//           const numItems = Math.floor(Math.random() * 5);
//           for (let j = 0; j < numItems; j++) {
//             this.state.items[strTime].push({
//               name: 'Item for ' + strTime,
//               height: Math.max(50, Math.floor(Math.random() * 150))
//             });
//           }
//         }
//       }
//       //console.log(this.state.items);
//       const newItems = {};
//       Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
//       this.setState({
//         items: newItems
//       });
//     }, 1000);
//     // console.log(`Load Items for ${day.year}-${day.month}`);
//   }
//
//   renderItem(item) {
//     return (
//       <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
//     );
//   }
//
//   renderEmptyDate() {
//     return (
//       <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
//     );
//   }
//
//   rowHasChanged(r1, r2) {
//     return r1.name !== r2.name;
//   }
//
//   timeToString(time) {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
//   }
// }
//
// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: 'white',
//     flex: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//     marginTop: 17
//   },
//   emptyDate: {
//     height: 15,
//     flex:1,
//     paddingTop: 30
//   }
// });

constructor(props) {
  super(props);
  this.state = {
    items: {
     '2012-05-16': [{text: 'item 1 - any js object'}],
     '2012-05-23': [{text: 'item 2 - any js object'}],
     '2012-05-24': [],
     '2012-05-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
    },
    selected: new Date()
  };
}
render(){
  return (
    <Agenda
      items={this.state.items}
      loadItemsForMonth={(month) => {console.log('trigger items loading')}}
      onDayPress={(day)=>{console.log('day pressed')}}
      onDayChange={(day)=>{console.log('day changed')}}
      selected={'2012-05-16'}
      minDate={'2012-05-10'}
      maxDate={'2012-05-30'}
      pastScrollRange={12}
      futureScrollRange={12}
      renderItem={this.renderItem.bind(this)}
      renderEmptyDate={this.renderEmptyDate.bind(this)}
      rowHasChanged={this.rowHasChanged.bind(this)}
      renderDay={(day, item) => {return (<View />);}}
      renderKnob={() => {return (<View />);}}
      hideKnob={true}
      markedDates={{
        '2012-05-16': {selected: true, marked: true},
        '2012-05-23': {marked: true},
        '2012-05-25': {marked: true}
      }}
      theme={{
        ...calendarTheme,
        agendaDayTextColor: 'yellow',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'blue'
      }}
      style={{}}
    />
);
}
renderItem(item) {
  console.log(item);
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

export default Calendar;
