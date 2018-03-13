import React from 'react';
import color from './color.js';
import { StyleSheet, Dimensions } from 'react-native';
const Viewport = Dimensions.get('window');
const inputWidth = Viewport.width - 75;
const descriptionWidth = (Viewport.width - 80)/2;
const profileTopHeight = Viewport.height*0.35;
const height = Viewport.height - profileTopHeight-50;
const profileImageHeight = 150;
if(profileTopHeight < 250){
  profileTopHeight = 250;
}
const styles = StyleSheet.create({
  profileMainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  profileTopContainer: {
    height: profileTopHeight,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
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
  },
  overlayProfileImage: {
    position: 'absolute',
    alignSelf: 'center',
    paddingTop: 60,
  },
  editProfileImage: {
    opacity: 0.5,
    alignSelf: 'center',
    paddingTop: profileImageHeight-25,
    paddingLeft: 110
  },
  profileNameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileNameTextBox: {
    paddingTop: (profileTopHeight - profileImageHeight- 90)/2,
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
    paddingTop:20,
    alignSelf: 'flex-end',
  },
});

export default styles;
