import React from 'react';
import { StyleSheet } from 'react-native';
import color from '../styles/color.js';

const styles = StyleSheet.create({
  button: {
    marginTop: 33,
    marginLeft: 15
  },
  container: {
    flex: 1,
    backgroundColor: color.searchBackground
  },
  input: {
    borderWidth: 0,
    borderRadius: 5,
    borderColor: color.searchPlaceholder,
    borderBottomWidth: 0,
    shadowColor: color.searchPlaceholder,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'stretch',
    height: 50,
    paddingHorizontal: 20
  },
  label: {
    color: color.searchNavBar, 
    fontWeight: 'bold', 
    fontSize: 20, 
    marginTop: 5 
  },
  listContainer: { 
    borderTopWidth: 0, 
    borderBottomWidth: 0 
  },
  listItemContainer: { 
    borderBottomWidth: 0 
  },
  navBar: {
    height: 100,
    backgroundColor: color.searchNavBar
  },
  postContainer: {
    flex:1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
    paddingRight: 10,
    paddingLeft: 10,
  },
  postHeader:{
    fontSize: 20,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    color: '#FF6600',
  },
  postSeparator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  postText: {
    fontSize: 14,
    marginBottom: 3,
    paddingBottom: 10
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE"
  }
});

export default styles;
