import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert, Image, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient, Font } from 'expo';

import styles from '../../styles/login_screen.js';

export default class SignUp extends React.Component {

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
          underlineColorAndroid="transparent"
          style={styles.textFieldContainer}
          placeholder="email"
        />
        <TextInput
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          style={styles.textFieldContainer}
          placeholder="password"
        />
        <TextInput
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          style={styles.textFieldContainer}
          placeholder="confirm password"
        />
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
            <Text>Already Registered?</Text>
            <Text style={styles.text} onPress={this.signInClicked}> Sign In</Text>
          </Text>
        </View>
      </View>
    );
  }
}
