import React from 'react';
import color from '../color.js';
import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

export const headerStyles = StyleSheet.create({
  headerContainer: {
    marginTop: 0,
    paddingTop: 0,
    top: 0,
    height: 40,
    backgroundColor: '#006760'
  },
  headerTitleStyle: {
    color: '#FFFFFF',
    marginBottom: 15
  },
  headerLeft: {
    marginLeft: 15,
    marginBottom: 15
  },
  headerPlus: {
    marginRight: 10
  }
});

export const searchStyles = StyleSheet.create({
  bold: {
    fontWeight: '900'
  },
  button: {
    marginTop: 33,
    marginLeft: 15
  },
  clearButton: {
    marginLeft: '75%', 
    marginTop: '-9%', 
    paddingBottom: '3.3%'
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
    color: color.searchText, 
    fontWeight: 'bold', 
    fontSize: 20, 
    marginTop: 5 
  },
  listContainer: { 
    borderTopWidth: 0, 
    borderBottomWidth: 0 
  },
  listItemContainer: { 
    borderBottomWidth: 1, 
    borderBottomColor: "#CED0CE"
  },
  navBar: {
    height: 100,
    backgroundColor: color.searchNavBar
  },
  noResults: {
    color: color.searchIcon, 
    fontSize: 20, 
  },
  noResultsDesc: {
    color: "#A59494", 
    fontSize: 15, 
    marginTop: 5,
    marginRight: 50,
    marginLeft: 50,
    textAlign: 'center'
  },
  postContainer: {
    flex: 1,
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
  searchSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE"
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
  },
  submitButton: {
    alignSelf: 'center',
    backgroundColor: '#FB5B1B',
    borderColor: '#FB5B1B',
    height: 40,    
    // marginRight: 20,
    marginTop: '8%',
    padding: 10,
    width: 130
  },
  subtitleText: {
    color: "#A59494", 
    fontSize: 14, 
    marginTop: 10,
    marginLeft: "5%",
  },
  titleText: {
    color: color.searchIcon, 
    fontSize: 17, 
    fontWeight: '700',
    marginLeft: "5%",
  }
});
