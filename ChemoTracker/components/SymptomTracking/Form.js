import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import Button from 'apsl-react-native-button'

class FormScreen extends Component {
  render() {
    // const {navigate} = this.props.navi
    return (
       <LinearGradient colors = {[ '#59D0C2','#066368']} style = {{flex:1}}>
        <View style={{flex:1}}>
          <View style={styles.circle}/>
          <View >
            <Text style={styles.description}> Do not always feel like eating but still able to have regular meals </Text>
          </View>
          <View style={styles.gradeButtons}>
            <Button style={styles.button} textStyle={styles.buttonText}>0</Button>
            <Button style={styles.button} textStyle={styles.buttonText}>1</Button>
            <Button style={styles.button} textStyle={styles.buttonText}>2</Button>
            <Button style={styles.button} textStyle={styles.buttonText}>3</Button>
          </View>
          <Button style={styles.doneButton} textStyle={{color: '#fff'}}
          onPressIn={() => this.props.navigation.navigate("Intervention")}>
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
    backgroundColor: '#fff',
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
  }

});
