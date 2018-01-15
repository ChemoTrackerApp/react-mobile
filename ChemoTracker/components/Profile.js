import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ProfileTop from './Profile/ProfileTop.js';
import ProfileDetailsTable from './Profile/ProfileDetailsTable.js'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/main.js';
import color from '../styles/color.js';
import { StatusBar } from 'react-native';

class Profile extends Component {
	static navigationOptions = {
		tabBarLabel: "Profile" ,
		tabBarIcon: () => (<Icon size={24} name="person" color={color.navBarIcon} />)
 	}
	render() {
    	return (
				<View style = { styles.profileMainContainer }>
					<StatusBar
						backgroundColor="transparent"
						barStyle="light-content"
						/>
					<ProfileTop />
					<ProfileDetailsTable />
      	</View>
    	);
  	}
}

export default Profile;
