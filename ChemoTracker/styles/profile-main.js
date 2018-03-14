import React from 'react';
import color from './color.js';
import { StyleSheet, Dimensions } from 'react-native';
import { totalSize } from 'react-native-dimension';
const Viewport = Dimensions.get('window');
const inputWidth = Viewport.width - 75;
const descriptionWidth = (Viewport.width - 80)/2;
const profileTopHeight = Viewport.height*0.3 < 220 ? 220 : Viewport.height*0.3;
const height = Viewport.height - profileTopHeight-50;
const profileImageHeight = 125;
const styles = StyleSheet.create({
  profileMainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileTopContainer: {
    height: 195,
    width: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: "column"
  },
  profileBackground: {
    height: profileTopHeight,
    width: '100%',
  },
  profileImage: {
    height: profileImageHeight,
    borderRadius: profileImageHeight/2,
    width: profileImageHeight,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  overlayProfileImage: {
    position: 'absolute',
    alignSelf: 'center',
  },
  editProfileImage: {
    opacity: 0.5,
    alignSelf: 'center',
    paddingTop: profileImageHeight-25,
    paddingLeft: 100,
    backgroundColor: 'transparent',
  },
  picTextLayout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 50,
  },
  profileNameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor:'transparent'
  },
  profileNameTextBox: {
    alignSelf: 'center'
  },
  profileSectionCell: {
    flexDirection:'column',
    paddingTop: 15,
    paddingBottom: 10,
    flex: 1,
  },
  profileTable: {
    top: profileTopHeight,
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
    fontSize: 15,
    backgroundColor: 'transparent',
  },
  profileDetailTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#d3d3d3',
    backgroundColor: 'transparent',
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
    backgroundColor: 'transparent',
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
    backgroundColor: 'transparent',
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
    alignSelf: 'flex-end',
    paddingRight: 13,
    paddingTop: 13
  },
  profileBackButton: {
    marginLeft: 15,
  },
  profileButton: {
    color: "#FFFFFF",
    backgroundColor: 'transparent',
    fontSize: 20,
  }
});

export default styles;
