import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/search.js';
import color from '../styles/color.js';

class PatientEducationResult extends Component {
	static navigationOptions = {
		tabBarLabel: "Search",
		tabBarIcon: () => (<FontAwesomeIcon size={24} name="search" color={color.navBarIcon} />)
  }

  render() {
    const {state} = this.props.navigation;

    return (
      <View style={ styles.container }>
        <View style={ styles.navBar }> 
          <View style={ styles.button }> 
            <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
              <IonIcon name="ios-arrow-back" size={ 40 } color={ color.arrowIcon }/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postHeader}>
          {state.params.data.name.first} {state.params.data.name.last}
          </Text>
          <Text style={ styles.postText }>
            {state.params.data.email}
          </Text>
          {/* <Text style={styles.headerPostDetailsLine}>
            Posted by {this.props.post.by} | {this.props.post.score} Points
          </Text> */}
          <View style={styles.postSeparator}/>
          {/* <Text style={styles.headerCommentTitle}>
            {this.props.post.descendants} Comments:
          </Text> */}
        </View>
        
      </View>      
    );
  }
}

export default PatientEducationResult;