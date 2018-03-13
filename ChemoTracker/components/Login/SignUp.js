import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert, Image, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient, Font } from 'expo';

import styles from '../../styles/login_screen.js';
import { register } from '../../services/login.js';

export default class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
      errorLabel: '',
      signUpEmail: '',
      signUpPassword1: '',
      signUpPassword2: '',
      auth_token: ''
    }
  }
  async onSubmit() {
    this.setState({ errorLabel: '' });
    if (this.state.signUpEmail=== '') {
      this.setState({ errorLabel: 'Email is required' });
      return;
    }
    if (this.state.signUpPassword1 === '') {
      this.setState({ errorLabel: 'Password is required' });
      return;
    }
    if (this.state.signUpPassword2 === '') {
      this.setState({ errorLabel: 'Confirm Password is required' });
      return;
    }
    register(this.state.signUpEmail, this.state.signUpPassword1,this.state.signUpPassword2)
    .then((responseJson) => {
      console.log("signup-responseJson", responseJson);
      if(responseJson.key) {
        this.setState({
          auth_token: responseJson.key
        });
          this.props.navigation.navigate("Menu", { token: this.state.auth_token });
      } else {
        if(responseJson.email) {
          console.log("email error: ", responseJson.email[0]);
        } else if(responseJson.password) {
          console.log("password error: ", responseJson.password[0]);
        }
      }
      })
    .catch((error) =>{
      console.error(error);
      this.setState({errorLabel: error});
    });
  }

  registerClicked = () => {

  }
  signInClicked = () => {
    this.props.navigation.navigate("Login");
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
          onChangeText={(text)=>{this.setState({signUpEmail:text})}}
          onSubmitEditing={(event) => {
            this.refs.PasswordField1.focus();
          }}
          style={styles.textFieldContainer}
          placeholder="email"
        />
        <TextInput
          ref ="PasswordField1"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(text)=>{this.setState({signUpPassword1:text})}}
          style={styles.textFieldContainer}
          onSubmitEditing={(event) => {
            this.refs.PasswordField2.focus();
            this.onSubmit();
          }}
          placeholder="password"
        />
        <TextInput
          ref ="PasswordField2"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(text)=>{this.setState({signUpPassword2:text})}}
          style={styles.textFieldContainer}
          onSubmitEditing={() => {  this.onSubmit();}}
          placeholder="confirm password"
        />
        <Text style={styles.errorLabel} >{this.state.errorLabel}</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={this.registerClicked}>
          <LinearGradient
            colors={['#59D0C2', '#066368']}
            start={[0, 1]}
            end={[1, 0]}
            style={styles.loginGradient}>
            <Text style={styles.loginText}> Sign Up </Text>
          </LinearGradient>
        </TouchableOpacity>
        <View>
          <Text style={styles.bottomSectionText}>
            <Text>Have an account?</Text>
            <Text style={styles.text} onPress={this.signInClicked}> Sign In</Text>
          </Text>
        </View>
      </View>
    );
  }
}
