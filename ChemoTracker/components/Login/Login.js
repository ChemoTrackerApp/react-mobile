import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert, Image, TouchableOpacity } from 'react-native';
import { LinearGradient, Font } from 'expo';


import styles from '../../styles/login_screen.js';

export default class Login extends React.Component {

  capi = 'http://ec2-52-15-106-40.us-east-2.compute.amazonaws.com:8000';



  state = {
    fontLoaded: false,
    errorLabel: '',
    loginUsername: '',
		loginPassword: '',
  };
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
    if (this.state.loginPassword === ''){
      this.setState({errorLabel:'Password is required'});
      return;
    }
    const response = fetch(`${api}/rest-auth/login/`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => {
      return res.json();
    });
    if (response.error === 'None'){
      utils.resetToScreen(this.state.navigation,'HomeView',{user:response.user,token:response.token});
    }else{
      this.setState({errorLabel:response.error});
    }
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
          source={require('../../assets/img/chemotracker.png')}
          style={styles.logo}
        />
        <TextInput
          keyboardType="email-address"
          style={styles.textFieldContainer}
          placeholder="email"
        />
        <TextInput
          secureTextEntry={true}
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
