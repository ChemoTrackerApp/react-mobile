import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { searchStyles } from '../../styles/PatientEducation/patient-education.js';
import color from '../../styles/color.js';

class Forum extends Component {
  static navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: () => (<FontAwesomeIcon size={ 24 } name="search" color={ color.navBarIcon } />)
  }

  render() {
    return (
      <View style={ searchStyles.container }>
        <View style={ searchStyles.navBar }> 
          <View style={ searchStyles.button }> 
            <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
              <IonIcon name="ios-arrow-back" size={ 40 } color={ color.arrowIcon }/>
            </TouchableOpacity>
          </View>
        </View>
        <Text>Forum</Text>
      </View>
    );
  }
}

export default Forum;