import React, { Component } from 'react';
import { View, StatusBar, Text, TextInput, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles/SymptomTracking/intervention.js';
import color from '../../styles/color.js';

class Intervention extends Component {
  static navigationOptions = {
    tabBarLabel: "Track",
    tabBarIcon: () => (<FontAwesomeIcon size={ 24 } name="heartbeat" color={ color.navBarIcon } />)
  } 

  render() {
    return (
      <View style={ styles.container }>
        <StatusBar hidden={true}/>
        <Text>Intervention</Text>
      </View>
    );
  }
}

export default Intervention;