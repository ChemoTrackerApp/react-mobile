import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert, Image, TouchableOpacity } from 'react-native';
import { LinearGradient, Font } from 'expo';


import styles from '../../styles/login_screen.js';

export default class Login extends React.Component {

  componentDidMount() {
   Font.loadAsync({
     'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
  });
}

  onPress = () => {
    Alert.alert("login pressed");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../chemotracker.png')}
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
       <TouchableOpacity
        style={{width: '70.55%',  height: 29}}
        onPress={this.loginClicked}>
          <LinearGradient
            colors={['#59D0C2','#066368']}
            start={[0, 1]}
            end={[1, 0]}
            style={{ padding: 15, alignItems: 'center', borderRadius: 5 , marginTop: '10%'}}>
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 19,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Sign In
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={{marginTop:'20%'}}>
          <Text style={{fontSize:19}}>
            <Text>New?</Text>
            <Text style={styles.text} onPress={this.onPress}> Sign Up</Text>
          </Text>
        </View>


      </View>
    );
  }
}
