import React from 'react';
import { StyleSheet } from 'react-native';

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
    color: "#FFFFFF",
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
  },
  signUpLink: {
    color: "#6374f4",
    fontWeight: 'bold'
  },
  text:{
    color: "#6374f4",
    fontWeight: 'bold',
    fontSize: 19
  }
});

export default styles;
