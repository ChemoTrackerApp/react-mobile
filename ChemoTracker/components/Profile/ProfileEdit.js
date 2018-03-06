import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { TabNavigator } from 'react-navigation';
import CategoryCell from './Cell.js';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
		tabBarLabel: "Profile" ,
		tabBarIcon: () => (<Icon size={24} name="person" color={color.navBarIcon} />)
 	}

  render() {
    return(<View>
      <Text>edit view</Text>
    </View>)
  }
}

export default ProfileEdit;
