import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from '../styles/main.js';
import color from '../styles/color.js';

const ProfileTop = {
	render() {
		return (
			<div>
				<View style={styles.profileTopContainer}>
					<Image source={require('../res/profile-background.jpg')} style={styles.profileBackground}>
						<View style={styles.profileTopContainer}/>
					</Image>
				</View>
				<Image source={require('../res/carrie.jpg')} style={styles.profileImage}/>
				<View>
					<Text style={styles.profileNameText}> Carrie Bradshaw </Text>
				</View>
			</div>
		);
	}
}

export default ProfileTop;
