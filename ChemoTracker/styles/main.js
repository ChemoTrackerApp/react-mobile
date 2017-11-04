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
    height: 250,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  profileBackground: {
    height: 250,
    width: '100%',
  },
  profileImage: {
    height: 130,
    borderRadius: 65,
    width: 130,
    top: 40,
  },
  profileNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    top: 50,
  }
});

export default styles;
