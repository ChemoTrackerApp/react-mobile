import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabNavigator, StackNavigator } from 'react-navigation';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../styles/color.js';
import trackStackNav from './SymptomTracking/Track.js';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class TrackTab extends Component {
  static navigationOptions = {
    tabBarLabel: "Track",
    tabBarIcon: () => (<Icon size={24} name="heartbeat" color={color.navBarIcon} />)
  }

  state = {
    index: 0,
    routes: [
      { key: 'nausea', title: 'Nausea' },
      { key: 'vomiting', title: 'Vomiting' },
      { key: 'fatigue', title: 'Fatigue' },
      { key: 'diarrhea', title: 'Diarrhea' },
      { key: 'constipation', title: 'Constipation' },
      { key: 'mucositis', title: 'Mucositis' },
      { key: 'handfootsyndrome', title: 'Hand Foot Syndrome' },
      { key: 'rash', title: 'Rash' },
      { key: 'nailchanges', title: 'Nail Changes'}
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
    {...props}
    scrollEnabled
    style={styles.tabbar}
    />
  );


  _renderScene = SceneMap({
    nausea: trackStackNav,
    vomiting: trackStackNav,
    fatigue: trackStackNav,
    diarrhea: trackStackNav,
    constipation: trackStackNav,
    mucositis: trackStackNav,
    handfootsyndrome: trackStackNav,
    rash: trackStackNav,
    nailchanges: trackStackNav
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    paddingTop: 20,
    backgroundColor:'#33B3A6'
  }
});

export default TrackTab;
