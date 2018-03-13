import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import Button from 'apsl-react-native-button'
import { styles } from '../../styles/SymptomTracking/track.js';

var buttonbg;
class FormScreen extends Component {
  state = {
    buttonbg1: 'transparent',
    buttonbg2: 'transparent',
    buttonbg3: 'transparent',
    buttonbg4: 'transparent',
    gradeMap: {
      0: 'None',
      1: 'Mild',
      2: 'Moderate',
      3: 'Severe'
    },
    selectedgrade: 0
  }
  buttonbg = this.state.buttonbg;
  render() {
    // const {navigate} = this.props.navi
    return (
      <LinearGradient colors={['#59D0C2', '#066368']} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.circle}>
            <Text style={styles.grade}>{this.state.gradeMap[this.state.selectedgrade]} </Text></View>
          <View >
            <Text style={styles.description}> Do not always feel like eating but still able to have regular meals </Text>
          </View>
          <View style={styles.gradeButtons}>
            <Button style={[styles.button, { backgroundColor: this.state.buttonbg1 }]} textStyle={styles.buttonText}
              onPressIn={() => {
                this.setState({ buttonbg2: 'transparent', buttonbg3: 'transparent', buttonbg4: 'transparent', buttonbg1: '#fff', selectedgrade: 0 });
              }} >0</Button>
            <Button style={[styles.button, { backgroundColor: this.state.buttonbg2 }]} textStyle={styles.buttonText}
              onPressIn={() => {
                this.setState({ buttonbg1: 'transparent', buttonbg3: 'transparent', buttonbg4: 'transparent', buttonbg2: '#fff', selectedgrade: 1 });
              }} >1</Button>
            <Button style={[styles.button, { backgroundColor: this.state.buttonbg3 }]} textStyle={styles.buttonText}
              onPressIn={() => {
                this.setState({ buttonbg1: 'transparent', buttonbg2: 'transparent', buttonbg4: 'transparent', buttonbg3: '#fff', selectedgrade: 2 });
              }} >2</Button>
            <Button style={[styles.button, { backgroundColor: this.state.buttonbg4 }]} textStyle={styles.buttonText}
              onPressIn={() => {
                this.setState({ buttonbg1: 'transparent', buttonbg2: 'transparent', buttonbg3: 'transparent', buttonbg4: '#fff', selectedgrade: 3 });
              }} >3</Button>
          </View>
          <Button style={styles.doneButton} textStyle={{ color: '#fff' }}
            onPressIn={() => {
              this.props.navigation.navigate("Intervention");
            }}>
            Done
          </Button>
        </View>
      </LinearGradient>
    );
  }
}
export default FormScreen;
