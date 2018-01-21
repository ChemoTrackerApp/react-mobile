import React from 'react';
import { StyleSheet } from 'react-native';
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBackground: {
    height: 300,
    width: '100%',
  },
  profileImage: {
    height: 150,
    borderRadius: 75,
    width: 150,
  },
  profileNameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    top: 20,
  },
  profileSectionCell: {
    flexDirection:'column',
    paddingTop: 15,
    paddingBottom: 10,
    flex: 1,
  },
  profileTable: {
    top: 300,
    position: 'absolute',
  },
  profileDetailCell: {
    flexDirection:'column',
    paddingTop: 15,
    paddingLeft: 20,
    width: '50%'
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
    height: 15,
  },
  profileDetailDescription: {
    fontSize: 15,
  },
  profileSectionTitleBox: {
    height: 18,
    paddingLeft: 20,
  },
  profileSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EF7A5A',
  },
  profileDetails: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
