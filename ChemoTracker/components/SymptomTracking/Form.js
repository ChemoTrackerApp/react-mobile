import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import Button from 'apsl-react-native-button'
import { styles } from '../../styles/SymptomTracking/track.js';
import color from '../../styles/color.js';

var buttonbg;
class FormScreen extends Component {
  state = {
    buttonbg1: color.white,
    buttonbg2: color.transparent,
    buttonbg3: color.transparent,
    buttonbg4: color.transparent,
    buttontxt1: color.trackOrange,
    buttontxt2: color.white,
    buttontxt3: color.white,
    buttontxt4: color.white,
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
      <LinearGradient colors={['#59D0C2', '#066368']} style={styles.felx}>
        <View style={styles.felx}>
          <View style={styles.circlesContainer}>
            <View style={styles.circle1}>
              <View style={styles.circle2}>
                <View style={styles.circle3}>
                  <Text style={styles.grade}>{this.state.gradeMap[this.state.selectedgrade]} </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.description}> Do not always feel like eating but still able to have regular meals </Text>
          </View>
          <View style={styles.gradeButtons}>
            <Button style={[styles.button, { backgroundColor: this.state.buttonbg1 }]} textStyle={[styles.buttonText, { color: this.state.buttontxt1 }]}
              onPressIn={() => {
                this.setState({
                  buttonbg1: color.white, buttonbg2: color.transparent, buttonbg3: color.transparent, buttonbg4: color.transparent,
                  buttontxt1: color.trackOrange, buttontxt2: color.white, buttontxt3: color.white, buttontxt4: color.white,
                  selectedgrade: 0
                });
              }} >0</Button>
            <Button style={[styles.button, { backgroundColor: this.state.buttonbg2 }]} textStyle={[styles.buttonText, { color: this.state.buttontxt2 }]}
              onPressIn={() => {
                this.setState({
                  buttonbg1: color.transparent, buttonbg2: color.white, buttonbg3: color.transparent, buttonbg4: color.transparent,
                  buttontxt1: color.white, buttontxt2: color.trackOrange, buttontxt3: color.white, buttontxt4: color.white,
                  selectedgrade: 1
                });
              }} >1</Button>
            <Button style={[styles.button, { backgroundColor: this.state.buttonbg3 }]} textStyle={[styles.buttonText, { color: this.state.buttontxt3 }]}
              onPressIn={() => {
                this.setState({
                  buttonbg1: color.transparent, buttonbg2: color.transparent, buttonbg3: color.white, buttonbg4: color.transparent,
                  buttontxt1: color.white, buttontxt2: color.white, buttontxt3: color.trackOrange, buttontxt4: color.white,
                  selectedgrade: 2
                });
              }} >2</Button>
            <Button style={[styles.button, { backgroundColor: this.state.buttonbg4 }]} textStyle={[styles.buttonText, { color: this.state.buttontxt4 }]}
              onPressIn={() => {
                this.setState({
                  buttonbg1: color.transparent, buttonbg2: color.transparent, buttonbg3: color.transparent, buttonbg4: color.white,
                  buttontxt1: color.white, buttontxt2: color.white, buttontxt3: color.white, buttontxt4: color.trackOrange,
                  selectedgrade: 3
                });
              }} >3</Button>
          </View>
          <Button style={styles.doneButton} textStyle={styles.doneButtonText}
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
