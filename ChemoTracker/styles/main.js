import React from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  profileCell: {
    height: 70,
    alignItems: 'center',
    flexDirection:'row',
  },
  profileTable: {
    top: 300,
    position: 'absolute',
  },
  profileDetailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    paddingRight: 30,
  },
  profileDetailDescription: {
    fontSize: 20,
    position: 'absolute',
  },
  profileTitleTextBox: {
    width: '50%',
    alignItems: 'flex-end',
  },
  profileDetailTextBox: {
    width: '50%',
  }
});

export default styles;
