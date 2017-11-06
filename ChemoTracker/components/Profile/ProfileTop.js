import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';

class ProfileTop extends Component{
	render() {
		return (
      <View style={styles.profileTopContainer}>
        <Image source={require('../../res/profile-background.jpg')} style={styles.profileBackground}>
          <View style={styles.profileTopContainer}>
            <Image source={require('../../res/carrie.jpg')} style={styles.profileImage}></Image>
            <Text style={styles.profileNameText}>Carrie</Text>
          </View>
  			</Image>
      </View>
		);
	}
}

export default ProfileTop;
