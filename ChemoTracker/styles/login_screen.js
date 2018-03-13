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
    width: 320,
    backgroundColor: 'transparent',
    color: "#000",
    marginBottom: 20,
    padding: 0 ,
    borderRadius: 0,
    borderStyle: 'solid',
    borderColor: '#066368',
    borderBottomWidth:  1,
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
    height: '30%',
    width: '50%'
  },
  signUpLink: {
    color: "#6374f4",
    fontWeight: 'bold'
  },
  text:{
    color: 'rgb(251,91, 27)',
    fontWeight: '700',
  },
  errorLabel:{
    fontSize: 14,
		color: 'rgb(254, 40, 81)',
		textAlign:'center'
  }
});

export default styles;
