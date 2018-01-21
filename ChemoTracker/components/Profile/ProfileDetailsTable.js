import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import CategoryCell from './Cell.js';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';

class ProfileDetailsTable extends Component {
  constructor(props) {
    super(props);
    this.peronalDetailsData = {
      data: [{
        title: "Full Name",
        description: "Carrie Bradshaw"
      }, {
        title: "Date of Birth",
        description: "02/04/1968"
      }, {
        title: "Gender",
        description: "Female"
      }]
    }
  }
  render() {
    return (
      <View style = {styles.profileTable}>
        <CategoryCell sectionTitle = "Personal Details"  data = {this.peronalDetailsData}/>
        <CategoryCell sectionTitle = "Medical History" data = {this.peronalDetailsData}/>
        <CategoryCell sectionTitle = "Drug Allergies" data = {this.peronalDetailsData}/>
      </View>
    );
  }
}

export default ProfileDetailsTable;
