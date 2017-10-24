import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/main.js';
import color from '../styles/color.js';

class PatientEducation extends Component {
	static navigationOptions = {
		tabBarLabel: "Search",
		tabBarIcon: () => (<FontAwesomeIcon size={24} name="search" color={color.navBarIcon} />)
	}
        
	render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.navBar }> 
          <View style={ styles.button }> 
            <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
              <IonIcon name="ios-arrow-back" size={ 40 } color={ color.arrowIcon }/>
            </TouchableOpacity>
          </View>
        </View>
        <Text>PatientEducation</Text>
      </View>
    );
  }
}

export default PatientEducation;