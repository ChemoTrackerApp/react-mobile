import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import Button from 'apsl-react-native-button'

var buttonbg;
class FormScreen extends Component {
  state = {
    buttonbg1: 'transparent',
    buttonbg2: 'transparent',
    buttonbg3: 'transparent',
    buttonbg4: 'transparent',
    gradeMap: {
      0:'None',
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
       <LinearGradient colors = {[ '#59D0C2','#066368']} style = {{flex:1}}>
        <View style={{flex:1}}>
          <View style={styles.circle}>
          <Text style={styles.grade}>{this.state.gradeMap[this.state.selectedgrade]} </Text></View>
          <View >
            <Text style={styles.description}> Do not always feel like eating but still able to have regular meals </Text>
          </View>
          <View style={styles.gradeButtons}>
            <Button style={[styles.button, {backgroundColor: this.state.buttonbg1}]} textStyle={styles.buttonText}
              onPressIn={()=>{
                this.setState({buttonbg2:'transparent',buttonbg3:'transparent',buttonbg4:'transparent',buttonbg1:'#fff', selectedgrade:0});
              }} >0</Button>
            <Button style={[styles.button, {backgroundColor: this.state.buttonbg2}]} textStyle={styles.buttonText}
            onPressIn={()=>{
              this.setState({buttonbg1:'transparent',buttonbg3:'transparent',buttonbg4:'transparent',buttonbg2:'#fff', selectedgrade:1});
            }} >1</Button>
            <Button style={[styles.button, {backgroundColor: this.state.buttonbg3}]} textStyle={styles.buttonText}
            onPressIn={()=>{
              this.setState({buttonbg1:'transparent',buttonbg2:'transparent',buttonbg4:'transparent',buttonbg3:'#fff', selectedgrade:2});
            }} >2</Button>
            <Button style={[styles.button, {backgroundColor: this.state.buttonbg4}]} textStyle={styles.buttonText}
            onPressIn={()=>{
              this.setState({buttonbg1:'transparent', buttonbg2:'transparent', buttonbg3:'transparent',buttonbg4:'#fff', selectedgrade:3});
            }} >3</Button>
          </View>
          <Button style={styles.doneButton} textStyle={{color: '#fff'}}
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

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius:25,
    width:50,
    height:50,
    marginLeft: 25,
    borderWidth: 0
  },
  doneButton: {
    backgroundColor: '#F07A12',
    width: 150,
    padding:10,
    borderColor: '#F07A12',
    alignSelf: 'center',
    marginTop: 40
  },
  gradeButtons: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    color: '#F07A12'
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ADE0DB',
    marginTop: 70,
    marginBottom: 30,
    alignSelf: 'center'
  },
  description: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    backgroundColor:'rgba(0,0,0,0)',
    marginBottom:20
  },
  grade: {
    fontSize: 30,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#066368',
    marginTop: '35%'
  }
});
