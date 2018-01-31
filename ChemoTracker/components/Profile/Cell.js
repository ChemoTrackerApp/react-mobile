import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.sectionTitle = props.sectionTitle;
    this.details = props.data;
  }

  render() {
    return (
      <View style = {styles.profileSectionCell}>
        <View style = {styles.profileSectionTitleBox}>
          <View>
            <Text style = {styles.profileSectionTitle}> {this.sectionTitle} </Text>
          </View>
        </View>
        <View style = {styles.profileDetails}>
          {this.createViewFromDetailsData()}
        </View>
      </View>
    );
  }

  createViewFromDetailsData() {
    return this.details.data.map((detailItem) => {
      return (
        <View key = {detailItem.title} style = {styles.profileDetailCell}>
          <View style = {styles.profileDetailTitleTextBox}>
            <Text style = {styles.profileDetailTitle}> {detailItem.title.toUpperCase()} </Text>
          </View>
          <View style = {styles.profileDetailDescriptionTextBox}>
            <Text style = {styles.profileDetailDescription}> {detailItem.description} </Text>
          </View>
        </View>
      )
    });
  }

}

export default Cell;
