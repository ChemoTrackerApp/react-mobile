import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, CameraRoll, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { LinearGradient, ImagePicker} from 'expo';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProfileTop extends Component {
	constructor(props) {
    super(props);
		console.log("props of profile top", props);
		this.state = {
			image: null
		}
	}

	onPress = async () => {
  	let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: "Images",
			aspect: [4, 3],
  	});

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

	openEditView = () => {
		console.log("open edit view");
		this.props.navigation.navigate('ProfileEdit');
	}

	render() {
		let { image } = this.state;
		return (
      <View style = {styles.profileTopContainer}>
        <LinearGradient colors = {[color.profileBackgroundDarkBlue, color.profileBackgroundLightBlue]} style = {styles.profileTopContainer}>
						<View style={styles.editProfile}>
							<Button
								onPress = {this.openEditView}
								title = "Edit"
								color = {color.white}/>
						</View>
						<View style={styles.overlayProfileImage}>
							{
								image ? <Image source = {{ uri: image }} style = {styles.profileImage}></Image> : <Image source = {require('../../res/carrie.jpg')} style = {styles.profileImage}></Image>
							}
						</View>
						<View style={styles.editProfileImage}>
							<TouchableWithoutFeedback onPress={this.onPress}>
								<Icon size={25} name="camera" color={color.white}/>
							</TouchableWithoutFeedback>
						</View>
						<View style={styles.profileNameTextBox}>
							<Text style = {styles.profileNameText}>Carrie</Text>
						</View>

				</LinearGradient>
      </View>
		);
	}
}

export default ProfileTop;
