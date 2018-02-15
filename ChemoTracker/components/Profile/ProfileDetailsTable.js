import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import CategoryCell from './Cell.js';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';

class ProfileDetailsTable extends Component {
  constructor(props) {
    super(props);
    this.peronalDetailsData = {
      datap: [{
        title: "Full Name",
        description: "Carrie Bradshaw",
        inputType: "text",
      }, {
        title: "Gender",
        description: "Female",
        inputType: "dropdown",
      },{
        title: "Date of Birth",
        description: "02/04/1968",
        inputType: "date",
      }],
      datac: [{
        title: "Phone Number",
        description: "123-456-7890",
        inputType: "text",
      }, {
        title: "Email",
        description: "cbradshaw@gmail.com",
        inputType: "text",
      }],
      dataa: [{
        title: "Allergen",
        description: "Peanuts",
        inputType: "text",
      }, {
        title: "Reaction",
        description: "Hives",
        inputType: "text",
      }],
      datam: [{
        title: "Medical Conditions",
        description: "High Blood Pressure",
        inputType: "text",
      }, {
        title: "Medication",
        description: "Lipitor",
        inputType: "text",
      }],
      datacr: [{
        title: "Diagnosis",
        description: "Breast Cancer",
        inputType: "modaldropdown",
      }, {
        title: "Chemotherapy",
        description: "None",
        inputType: "text",
      }]
    }
  }
  render() {
    return (
      <ScrollView style = {styles.profileTable} pagingEnabled={true} showsVerticalScrollIndicator={true}>
        <CategoryCell sectionTitle = "Personal Details"  data = {this.peronalDetailsData.datap}/>
        <CategoryCell sectionTitle = "Contact Information" data = {this.peronalDetailsData.datac}/>
        <CategoryCell sectionTitle = "Allergies" data = {this.peronalDetailsData.dataa}/>
        <CategoryCell sectionTitle = "Medical Information" data = {this.peronalDetailsData.datam}/>
        <CategoryCell sectionTitle = "Cancer History" data = {this.peronalDetailsData.datacr}/>
      </ScrollView>
    );
  }
}

export default ProfileDetailsTable;
