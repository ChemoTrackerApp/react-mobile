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
    this.sections = [{
        title: "Personal Details",
        data: this.peronalDetailsData.datap,
      }, {
        title: "Contact Information",
        data: this.peronalDetailsData.datac,
      }, {
        title: "Allergies",
        data: this.peronalDetailsData.dataa,
      }, {
        title: "Medical Information",
        data: this.peronalDetailsData.datam,
      }, {
        title: "Cancer History",
        data: this.peronalDetailsData.datacr,
      }
    ];
  }
  render() {
    return (
      <ScrollView style = {styles.profileTable} pagingEnabled={true} showsVerticalScrollIndicator={true}>
      {this.renderCells()}
      </ScrollView>
    );
  }
  renderCells(){
    return this.sections.map((section) => {
        return(<CategoryCell key={section.title} sectionTitle={section.title}  data={section.data}/>)
    });
  }
}

export default ProfileDetailsTable;
