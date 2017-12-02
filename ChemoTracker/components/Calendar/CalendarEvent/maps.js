import React, { Component } from 'react';
import { TextInput, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import styles from '../../../styles/main.js';
import color from '../../../styles/color.js';
import { mapStyles } from '../../../styles/calendar.js';
import _ from 'lodash';
import moment from 'moment';
import MapView from 'react-native-maps';

class Maps extends Component {

  constructor(props) {
    super(props);
    console.log("props", this.props);
    const params = props.navigation.state.params;
    this.state = {
      location: ''
    }
    this.mapRendered = this.mapRendered.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  mapRendered() {
    console.log("map is rendered");
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={mapStyles.map}
          onMapReady={this.mapRendered}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }
}

export default Maps;
