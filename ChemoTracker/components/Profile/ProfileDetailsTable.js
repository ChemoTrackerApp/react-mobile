import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Cell from './Cell.js';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';

class ProfileDetailsTable extends Component {
  render() {
    return (
      <View style={styles.profileTable}>
        <Cell title = "Full Name:" description = "Carrie Bradshaw"/>
        <Cell title = "Diagnosis:" description = "Breast Cancer"/>
        <Cell title = "Drug Allergies:" description = "None"/>
      </View>
    );
  }
}

export default ProfileDetailsTable;
