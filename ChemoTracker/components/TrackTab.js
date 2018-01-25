import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TabView, TabNavigator, StackNavigator } from 'react-navigation';
import TopBarNav  from 'top-bar-nav';
import Icon from 'react-native-vector-icons/Octicons';
// import Home from './Home.js';
// import Track from './SymptomTracking/Track.js';
// import Intervention from './SymptomTracking/Intervention.js';
// import TrackHeader from './SymptomTracking/TrackHeader.js';
// import { headerStyles } from '../styles/SymptomTracking/track.js';


// const TrackTab = TabNavigator({
//   Nausea: { screen: Home, path: '' },
//   Vomiting: { screen: Home, path: '' },
//   Fatigue: { screen: Home, path: '' },
//   Diarrhea: { screen: Home, path: '' },
//   Constipation: { screen: Home, path: '' },
//   Mucositis: { screen: Home, path: '' },
//   HandFootSyndrome: { screen: Home, path: '' },
//   Rash: { screen: Home, path: '' },
//   NailChanges: { screen: Home, path: '' }
// }, {
//   tabBarPosition: 'top',
//   animationEnabled: true,
//   tabBarOptions: {
//
//   }
// })

const Scene = ({ index }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 20 }}>{index}</Text>
  </View>
);
const ROUTES = {
  Scene,
  // ideally you would have a ROUTES object with multiple React component scenes
};
const ROUTESTACK = [
  { label: 'React', title: 'Scene' }, // label is what you see in the top bar
  { label: 'Native', title: 'Scene' }, // title is just the name of the Component being rendered.  See the renderScene property below
  { label: 'Is', title: 'Scene' },
  { label: 'Cool', title: 'Scene' }
];

class TrackTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <TopBarNav
          // routeStack and renderScene are required props
          routeStack={ROUTESTACK}
          renderScene={(route, i) => {
            // This is a lot like the now deprecated Navigator component
            let Component = ROUTES[route.title];
            return <Component index={i} />;
          }}
          // Below are optional props
          headerStyle={[styles.headerStyle, { paddingTop: 20 }]} // probably want to add paddingTop: 20 if using TopBarNav for the  entire height of screen on iOS
          labelStyle={styles.labelStyle}
          underlineStyle={styles.underlineStyle}
          imageStyle={styles.imageStyle}
          sidePadding={40} // Can't set sidePadding in headerStyle because it's needed to calculate the width of the tabs
          inactiveOpacity={1}
          fadeLabels={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 1,
    borderColor: '#e6faff',
    backgroundColor: '#3385ff'
  },
  labelStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff'
  },
  imageStyle: {
    height: 20,
    width: 20,
    tintColor: '#e6faff'
  },
  underlineStyle: {
    height: 3.6,
    backgroundColor: '#e6faff'
  }
});

export default TrackTab;
