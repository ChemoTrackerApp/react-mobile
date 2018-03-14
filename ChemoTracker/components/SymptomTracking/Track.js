import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FormScreen from './Form.js';
import InterventionScreen from './Intervention.js';

const mapNavigationStateParamsToProps = (SomeComponent) => {
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions; // better use hoist-non-react-statics
        render() {
            const {navigation: {state: {params}}} = this.props
            return <SomeComponent {...params} {...this.props} />
        }
    }
}

const TrackContainer = StackNavigator({
  Form: {
    screen: mapNavigationStateParamsToProps(FormScreen),
    navigationOptions: {
      header: null
    }
  },
  Intervention: {
    screen: InterventionScreen,
    navigationOptions: {
      header: null
    }
  }
})

class TrackStackNav extends Component {
  constructor(props) {
    super(props);
    console.log("TrackStackNav", props);
  }
  render() {
    const token = this.props.token;
    return <TrackContainer screenProps={{token: token, route:this.props.route}}/>;
  }
}

export default TrackStackNav;
