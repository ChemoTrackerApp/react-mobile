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
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  profileBackground: {
    height: 300,
    width: '100%',
  },
  profileImage: {
    height: 150,
    borderRadius: 75,
    width: 150,
    top: 60,
  },
  profileNameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    top: 75,
  }
});

export default styles;
