import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { LinearGradient} from 'expo';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';

class ProfileTop extends Component {
	render() {
		return (
      <View style = {styles.profileTopContainer}>
        <LinearGradient colors = {[color.profileBackgroundDarkPurple, color.profileBackgroundLightPurple]} style = {styles.profileTopContainer}>
            <Image source = {require('../../res/carrie.jpg')} style = {styles.profileImage}></Image>
            <Text style = {styles.profileNameText}>Carrie</Text>
				</LinearGradient>
      </View>
		);
	}
}

export default ProfileTop;
