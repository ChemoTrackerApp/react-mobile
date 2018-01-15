import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.description = props.description;
  }

  render() {
    return (
      <View style={styles.profileCell}>
        <View style={styles.profileTitleTextBox}>
          <Text style={styles.profileDetailTitle}>{this.title}</Text>
        </View>
        <View style={styles.profileDetailTextBox}>
          <Text style={styles.profileDetailDescription}>{this.description}</Text>
        </View>
      </View>
    );
  }
}

export default Cell;
