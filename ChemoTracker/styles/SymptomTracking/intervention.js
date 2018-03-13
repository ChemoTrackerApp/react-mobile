import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import color from '../color.js';

export const isIphoneX = () => {
  let d = Dimensions.get('window');
  const { height, width } = d;
  return (
    Platform.OS === 'ios' && (height === 812 || width === 812)
  );
}

export const isIphonePlus = () => {
  let d = Dimensions.get('window');
  const { height, width } = d;
  return (
    Platform.OS === 'ios' && (height === 736 || width === 736)
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.trackBackground,
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    color: color.searchText,
    fontSize: isIphoneX() || isIphonePlus() ? 22 : 19,
    fontWeight: 'bold',   
    paddingBottom: isIphoneX() || isIphonePlus() ? height(0.5) : 0,
    paddingTop: isIphoneX() || isIphonePlus() ? height(3) : height(2),
    textAlign: 'center'
    
  },
  dismissButton: {
    alignSelf: 'center',
    backgroundColor: '#FB5B1B',
    borderColor: '#FB5B1B',
    height: height(5),
    padding: height(2),
    width: isIphoneX() || isIphonePlus() ? width(40) : width(35)
  },
  dismissSection: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  interventionsContent: {
    paddingLeft: width(7),
    paddingRight: width(7),
    paddingTop: height(1)    
  },
  interventionsText: {
    color: color.trackContent,
    fontSize: isIphoneX() || isIphonePlus() ? 15 : 14,
    paddingBottom: height(2),
    textAlign: 'center'
  },
  interventionsSection: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: "#CECECE",
    paddingTop: isIphoneX() ? height(7) : height(3),
  },
  tipsContent: {
    flexDirection: 'column',
    paddingLeft: width(8),
    paddingRight: width(3),
    width: width(80)
  },
  tipsSubsection: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#CECECE",
    paddingBottom: height(2),
    paddingRight: width(3),
    paddingTop: height(2)    
  },
  tipsSection: {
    paddingBottom: isIphoneX() || isIphonePlus() ? height(3) : height(2)
  },
  tipsText: {
    color: color.trackContent,
    fontSize: isIphoneX() || isIphonePlus() ? 15 : 14,
    paddingTop: height(0.5),
    textAlign: 'left'
  }
})