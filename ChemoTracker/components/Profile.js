import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/main.js';
import color from '../styles/color.js';

//let res = '../res/profile-background.jpg';
//let profilePic = '../res/carrie.jpg';

class Profile extends Component {
	static navigationOptions = {
		tabBarLabel: "Profile" ,
		tabBarIcon: () => (<Icon size={24} name="person" color={color.navBarIcon} />)
 	}
	render() {
    	return (
      	<View style={styles.profileMainContainer}>
					<View style={styles.profileTopContainer}>
						<Image source={require('../res/profile-background.jpg')} style={styles.profileBackground}>
							<View style={styles.profileTopContainer}/>
						</Image>
					</View>
					<Image source={require('../res/carrie.jpg')} style={styles.profileImage}/>
					<View>
						<Text style={styles.profileNameText}> Carrie Bradshaw </Text>
					</View>
					<View style={{flex: 1, backgroundColor: 'powderblue'}} />
      	</View>
    	);
  	}
}

export default Profile;

class Cell extends React.Component {
	render() {

	}
}

class ProfileBottom extends React.Component {
	render() {

	}
}
