import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';
import ProfileTop from './ProfileTop.js'
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
					<ProfileTop />
					<View style={{flex: 1, backgroundColor: 'powderblue'}} />
      	</View>
    	);
  	}
}

export default Profile;
