import React from 'react';
import color from './color.js';
import { StyleSheet, Dimensions } from 'react-native';
const Viewport = Dimensions.get('window');
const height = Viewport.height - 355;
const inputWidth = Viewport.width - 75;
const descriptionWidth = (Viewport.width - 80)/2;
const styles = StyleSheet.create({
  profileMainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  profileTopContainer: {
    height: 300,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    justifyContent: 'center',
    flex: 1,
    flexDirection: "column"
  },
  profileBackground: {
    height: 300,
    width: '100%',
  },
  profileImage: {
    height: 150,
    borderRadius: 75,
    width: 150,
    alignSelf: 'center',
  },
  overlayProfileImage: {
    position: 'absolute',
    alignSelf: 'center'
  },
  editProfileImage: {
    opacity: 0.5,
    alignSelf: 'center',
    paddingTop: 150,
    paddingLeft: 110
  },
  profileNameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileNameTextBox: {
    paddingTop: 15,
    alignSelf: 'center'
  },
  profileSectionCell: {
    flexDirection:'column',
    paddingTop: 15,
    paddingBottom: 10,
    flex: 1,
  },
  profileTable: {
    top: 300,
    height: height,
  },
  profileDetailCell: {
    flexDirection:'column',
    paddingTop: 15,
    paddingLeft: 20,
    width: '50%'
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    width: inputWidth,
    paddingTop: 4,
  },
  profileEditDetailCell: {
    flexDirection:'column',
    paddingTop: 15,
    paddingLeft: 25,
    width: '100%'
  },
  profileTextInput: {
    height: 15,
    width: inputWidth,
    fontSize: 15
  },
  profileDetailTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#d3d3d3',
  },
  profileDetailTitleTextBox: {
    height: 13,
    paddingBottom: 20,
  },
  profileDetailDescriptionTextBox: {
    width: descriptionWidth,
  },
  profileDetailDescription: {
    fontSize: 15,
  },
  profileSectionTitleBox: {
    height: 18,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  profileSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.orange,
    paddingRight: 5,
  },
  profileDetails: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  editIcon: {
    width: 50
  },
  autocomplete: {
    alignSelf: "stretch",
    height: 50,
    margin: 10,
    marginTop: 50,
    backgroundColor: "#FFF",
    borderColor: "lightblue",
    borderWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  picker: {
    borderWidth: 1,
    borderColor: color.lightGray,
    borderRadius: 10,
    width: inputWidth,
  },
  editProfile: {
    paddingRight: 10
  },
  editProfileText: {
    fontSize: 20,
    color: color.white,
    alignSelf: 'flex-end',
  }
});

export default styles;
