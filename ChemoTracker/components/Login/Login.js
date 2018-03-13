import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert, Image, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient, Font } from 'expo';


import styles from '../../styles/login_screen.js';
import { login } from '../../services/login.js';

export default class Login extends React.Component {

  state = {
    fontLoaded: false,
    errorLabel: '',
    loginUsername: '',
    loginPassword: '',
    auth_token: ''
  };
  constructor(props){
    super(props);
    this.state = {
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-semibold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  async onSubmit() {
    this.setState({errorLabel:''});
    if (this.state.loginUsername === ''){
      this.setState({errorLabel:'Username is required'});
      return;
    }
    if (this.state.loginPassword === '') {
      this.setState({ errorLabel: 'Password is required' });
      return;
    }
    let response = login(this.state.loginUsername, this.state.loginPassword)
    .then((responseJson) => {
        this.setState({
          auth_token: responseJson.key
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
    });
    if (response.error === 'None'){
      this.props.navigation.navigate("Menu");
    }else{
      this.setState({errorLabel:response.error});
    }
  }

  signUpClicked = () => {
    this.props.navigation.navigate("SignUp");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Image
          source={require('../../assets/img/chemotracker.png')}
          style={styles.logo}
        />
        <TextInput
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={(text)=>{this.setState({loginUsername:text})}}
          onSubmitEditing={(event) => {
		this.refs.PasswordField.focus();
	  }}
          style={styles.textFieldContainer}
          placeholder="email"
        />
        <TextInput
          ref ="PasswordField"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(text)=>{this.setState({loginPassword:text})}}
          style={styles.textFieldContainer}
          onSubmitEditing={()=>{this.onSubmit();}}
          placeholder="password"
        />
       <Text style={styles.errorLabel} >{this.state.errorLabel}</Text>
       <TouchableOpacity
        style={styles.loginButton}
        onPress={()=>{this.onSubmit();}}>
          <LinearGradient
            colors={['#59D0C2', '#066368']}
            start={[0, 1]}
            end={[1, 0]}
            style={styles.loginGradient}>
            {
              this.state.fontLoaded ? <Text style={styles.loginText}> Login </Text> : null
            }
          </LinearGradient>
        </TouchableOpacity>

        <View>
          <Text style={styles.bottomSectionText}>
            <Text>New?</Text>
            <Text style={styles.text} onPress={this.signUpClicked}> Sign Up</Text>
          </Text>
        </View>
      </View>
    );
  }
}
