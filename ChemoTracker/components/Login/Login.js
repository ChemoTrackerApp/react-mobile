import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert, Image, TouchableOpacity } from 'react-native';
import { LinearGradient, Font } from 'expo';


import styles from '../../styles/login_screen.js';

export default class Login extends React.Component {

  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
   await Font.loadAsync({
     'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
     'open-sans-semibold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
   });
   this.setState({ fontLoaded: true });
}

  onPress = () => {
    Alert.alert("login pressed");
  }

  loginClicked = () => {
    this.props.navigation.navigate("Menu");
  }

  signUpClicked = () => {
    this.props.navigation.navigate("SignUp");
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
            {  this.state.fontLoaded ? (
              <Text
                style={{
                  backgroundColor: 'transparent',
                  fontSize: 19,
                  fontFamily: 'open-sans-semibold',
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Login
              </Text>  ) : null
            }
          </LinearGradient>
        </TouchableOpacity>

        <View style={{marginTop:'20%'}}>
          <Text style={{fontSize:18}}>
            <Text>New?</Text>
            <Text style={styles.text} onPress={this.signUpClicked}> Sign Up</Text>
          </Text>
        </View>


      </View>
    );
  }
}
