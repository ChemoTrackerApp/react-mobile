import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ProfileTop from './ProfileTop.js';
import ProfileDetailsTable from './ProfileDetailsTable.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';
import { StatusBar } from 'react-native';

class Profile extends Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		tabBarLabel: "Profile" ,
		tabBarIcon: () => (<Icon size={24} name="person" color={color.navBarIcon} />)
 	}

	render() {
    	return (
				<View style = { styles.profileMainContainer }>
					<StatusBar hidden />
					<ProfileTop navigation={this.props.navigation}/>
					<ProfileDetailsTable />
      	</View>
    	);
  	}
}

export default Profile;
