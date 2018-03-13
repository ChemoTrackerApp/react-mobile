import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ProfileTop from './ProfileTop.js';
import ProfileDetailsTable from './ProfileDetailsTable.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';
import { StatusBar } from 'react-native';
import { login, getProfile } from '../../services/profileServices.js';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profileDetailsData: null,
			profileImage: null
		}
		this.getProfileData();
	}

	static navigationOptions = {
		tabBarLabel: "Profile" ,
		tabBarIcon: () => (<Icon size={24} name="person" color={color.navBarIcon} />)
 	}

	stringFromList(list){
		item = "";
		for(var i in list){
			item += list[i] + " ";
		}
		return item;
	}

	mapAllergies(allergy){
		a = [];
		for(var i in allergy){
			o1 = {
				title: "Allergen",
				description: allergy[i].allergen,
			}
			o2 = {
				title: "Reaction",
				description: this.stringFromList(allergy[i].reaction)
			}
			a.push(o1);
			a.push(o2);
		}
		return a;
	}

	setImageAndDetailsData(profileData) {
		this.setState({
			image: profileData.image,
			name: profileData.firstName,
			profileDetailsData:
			[{
					title: "Personal Details",
					data: [{
						title: "Full Name",
		        description: profileData.firstName + " " + profileData.lastName,
					}, {
		        title: "Gender",
		        description: profileData.gender,
		      }, {
		        title: "Date of Birth",
		        description: profileData.dateOfBirth,
		      }]
				}, {
					title: "Contact Information",
					data: [{
						title: "Phone Number",
		        description: profileData.phoneNumber,
					}, {
						title: "Email",
		        description: profileData.emailAddress,
					}]
				}, {
					title: "Allergies",
					data: this.mapAllergies(profileData.allergy),
				}, {
					title: "Medical Information",
					data: [{
						title: "Medical Conditions",
		        description: this.stringFromList(profileData.medicalConditions),
					}, {
						title: "Medications",
		        description: this.stringFromList(profileData.medicationList),
					}],
				}, {
					title: "Cancer History",
					data: [{
						title: "Diagnosis",
		        description: profileData.cancerDiagnosis,
					}, {
						title: "Chemotherapy",
		        description: profileData.chemotherapy
					}]
				}]
		});
	}

	getProfileData() {
		login()
		.then(t => {
      token = t;
			getProfile()
			.then(profileData => {
				this.setImageAndDetailsData(profileData)
			})
			.catch(err => {
        console.log(err);
      })
		})
		.catch(err => {
			console.log(err);
		})
	}

	render() {
			return (
				<View style = { styles.profileMainContainer }>
					<StatusBar
						backgroundColor="transparent"
						barStyle="light-content"
						/>
					<ProfileTop navigation={this.props.navigation} image={this.state.image} name={this.state.name}/>
					<ProfileDetailsTable sections={this.state.profileDetailsData}/>
      	</View>
    	);
  	}
}

export default Profile;
