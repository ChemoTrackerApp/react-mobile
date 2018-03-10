import React, { Component } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import PatientEducation from './PatientEducation/PatientEducation.js';
import Search from './PatientEducation/Search.js';
import Forum from './PatientEducation/Forum.js';
import { headerStyles } from '../styles/PatientEducation/patient-education.js';
import { DeviceEventEmitter } from 'react-native'

const navOptionsPE = ({navigation}) => (
  {
    title: 'Patient Education',
    header: null
  }
)

const navOptionsS = ({navigation}) => (
  {
    title: 'Patient Education',
    headerStyle: headerStyles.headerContainer,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerTintColor: 'white',
    headerLeft: <TouchableOpacity onPress={ () => {  DeviceEventEmitter.emit('refreshState',  {}); navigation.goBack(); }}
                  style={headerStyles.headerLeft}>
                  <Icon size={24} name="chevron-left"
                      color='#FFFFFF'/>
                </TouchableOpacity>
  }
)

const navOptionsF = ({navigation}) => (
  {
    title: 'Forum',
    headerStyle: headerStyles.headerContainer,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerTintColor: 'white',
    headerLeft: <TouchableOpacity onPress={ () => { navigation.goBack() }}
                  style={headerStyles.headerLeft}>
                  <Icon size={24} name="chevron-left"
                      color='#FFFFFF'/>
                </TouchableOpacity>
  }
)

const PatientEducationTab = StackNavigator({
  PatientEducation: {
    screen: PatientEducation,
    path: 'patient-education',
    navigationOptions: navOptionsPE
  },
  Search: {
    screen: Search,
    path: 'patient-education/search',
    navigationOptions: navOptionsS
  },
  Forum: {
    screen: Forum,
    path: 'patient-education/forum',
    navigationOptions: navOptionsF
  }
})

export default PatientEducationTab;