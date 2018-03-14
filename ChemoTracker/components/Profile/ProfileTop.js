import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, CameraRoll, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { LinearGradient, ImagePicker} from 'expo';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RNS3 } from 'react-native-aws3';
import { getAccessKey } from '../../services/profileServices.js';

class ProfileTop extends Component {
	constructor(props) {
    super(props);
		this.state = {
			image: this.props.image,
			name: this.props.name,
			token: this.props.token
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps != this.props){
			this.setState({
				image: nextProps.image,
				name: nextProps.name
      });
    }
  }

	onPress = async () => {
  	let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: "Images",
			aspect: [4, 3],
  	});

    if (!result.cancelled) {
			getAccessKey(this.state.token)
			.then(res => {
				console.log("profile res", res);
				file = {
					uri: result.uri,
					name: "profileImage.jpeg",
					type: "image/jpeg"
				}
				options = {
					keyPrefix: "profile-images/",
				  bucket: "chemotracker",
				  region: res.region,
				  accessKey: res.accessKey,
				  secretKey: res.secretKey,
				  successActionStatus: 201
				}
				RNS3.put(file, options).then(response => {
					console.log(response);
					if (response.status !== 201)
				    throw new Error("Failed to upload image to S3");
					imageUri = response.body.postResponse.location;
					console.log(response.body.postResponse);
					this.setState({ image: imageUri });
					//send response to backend

				});
			})
    }
  };

	openEditView = () => {
		this.props.navigation.navigate('ProfileEdit');
	}

	render() {
		return (
      <View style = {styles.profileTopContainer}>
				<View style={styles.editProfile}>
					<TouchableOpacity
						onPress = {this.openEditView}>
						<Text style={styles.profileButton}>Edit</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.overlayProfileImage}>
				{
						<Image source = {{ uri: this.state.image }} style = {styles.profileImage}></Image>
				}
				</View>
				<View style={styles.editProfileImage}>
					<TouchableWithoutFeedback onPress={this.onPress}>
						<Icon size={25} name="camera" color={color.white}/>
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.profileNameTextBox}>
					<Text style = {styles.profileNameText}>{this.state.name}</Text>
				</View>
      </View>
		);
	}
}

export default ProfileTop;
