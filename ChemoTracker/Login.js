import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert, Image } from 'react-native';

export default class Login extends React.Component {
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
       <View style={styles.buttonContainer}>
         <Button
          onPress={()=> {}}
          title="Login"
          color="#fff"
          accessibilityLabel="Tap on Me"
         />
       </View>
       <Text>New? <Text style={{color: "#6374f4", fontWeight: 'bold'}}>SIGN UP</Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFieldContainer: {
    height: 60,
    width: 300,
    backgroundColor: "#FF6666",
    marginBottom: 20,
    padding: 10 ,
    borderRadius: 5
  },
  buttonContainer: {
    backgroundColor: "#6374f4",
    borderRadius: 12,
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    width:150,
    marginTop: 20,
    marginBottom: 20
  },
  logo: {
    height: 250,
    width: 250
  }
});
