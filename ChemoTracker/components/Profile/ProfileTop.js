import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, CameraRoll } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { LinearGradient, ImagePicker} from 'expo';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProfileTop extends Component {
	state = {
    image: null,
  };

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

	render() {
		let { image } = this.state;
		return (
      <View style = {styles.profileTopContainer}>
        <LinearGradient colors = {[color.profileBackgroundDarkPurple, color.profileBackgroundLightPurple]} style = {styles.profileTopContainer}>
						<View style={styles.overlayProfileImage}>
							<Image source = {require('../../res/carrie.jpg')} style = {styles.profileImage}></Image>
						</View>
						<View style={styles.editProfileImage}>
							<TouchableHighlight onPress={this.onPress}>
								<Icon size={17} name="camera" color={color.white}/>
							</TouchableHighlight>
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
