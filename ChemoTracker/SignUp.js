import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert, Image } from 'react-native';

import styles from '../styles/login_screen.js';

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./chemotracker.png')}
          style={styles.logo}
        />
        <TextInput
          style={styles.textFieldContainer}
          placeholder="email"
        />
       <TextInput
         style={styles.textFieldContainer}
         placeholder="password"
       />
       <TextInput
         style={styles.textFieldContainer}
         placeholder="confirm password"
       />
       <View style={styles.buttonContainer}>
         <Button
          onPress={()=> {}}
          title="Register"
          color="#fff"
          accessibilityLabel="Tap on Me"
         />
       </View>
       <Text>Already Registered?  <Text style={styles.text}>LOGIN</Text></Text>
      </View>
    );
  }
}
