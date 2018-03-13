import React from 'react';
import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import color from '../color.js';

export const headerStyles = StyleSheet.create({
  headerBackground:{
    backgroundColor: '#F4FAFC'
  },
  headerTitleStyle: {
    color: '#000000'
  },
  headerBackTitleStyle: {
    color: '#000000'
  },
  headerPlus: {
    marginRight: 10
  }
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.searchBackground
  },
  button: {
    borderWidth: 1,
    borderRadius: 25,
    width: 50,
    height: 50,
    marginLeft: 25,
    borderWidth: 0
  },
  doneButton: {
    backgroundColor: '#F07A12',
    width: 150,
    padding: 10,
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
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 20
  },
  grade: {
    fontSize: 30,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#066368',
    marginTop: '35%'
  }
})