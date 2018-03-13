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

export const headerStyles = StyleSheet.create({
  headerBackground: {
    backgroundColor: color.trackHeader
  },
  headerTitleStyle: {
    color: color.black
  },
  headerBackTitleStyle: {
    color: color.black
  },
  headerPlus: {
    marginRight: 10
  }
});

const BASE_SIZE = isIphoneX() || isIphonePlus() ? width(50) : width(45)

export const styles = StyleSheet.create({
  button: {
    borderRadius: width(12)/2,
    width: width(12),
    height: width(12),
    marginRight: width(3),
    marginLeft: width(3),
    borderWidth: 0
  },
  buttonText: {
    fontSize: totalSize(2),
    fontWeight: 'bold',
  },
  circlesContainer: {
    width: BASE_SIZE,
    height: BASE_SIZE,
    marginTop: height(8),
    marginBottom: height(5),
    alignSelf: 'center',
    alignItems: 'center',
  },
  circle1: {
    top: 0,
    position: 'absolute',
    width: BASE_SIZE,
    height: BASE_SIZE,
    borderRadius: BASE_SIZE / 2,
    backgroundColor: '#EFEFF417'
  },
  circle2: {
    top: BASE_SIZE * 0.1,
    left: BASE_SIZE * 0.1,
    position: 'absolute',
    width: BASE_SIZE * 0.8,
    height: BASE_SIZE * 0.8,
    borderRadius: BASE_SIZE / 2,
    backgroundColor: '#EFEFF423'
  },
  circle3: {
    top: BASE_SIZE * 0.1,
    left: BASE_SIZE * 0.1,
    position: 'absolute',
    width: BASE_SIZE * 0.6,
    height: BASE_SIZE * 0.6,
    borderRadius: BASE_SIZE * 0.6 / 2,
    backgroundColor: '#EFEFF443'
  },
  container: {
    flex: 1,
    backgroundColor: color.searchBackground
  },
  description: {
    fontSize: totalSize(2.2),
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: height(3),
    marginLeft: width(1),
    marginRight: width(1)
  },
  doneButton: {
    backgroundColor: color.trackOrange,
    borderColor: color.trackOrange,
    width: width(45),
    height: height(7),
    borderRadius: width(45) / 2,
    padding: height(2),
    alignSelf: 'center'
  },
  doneButtonText: {
    color: color.white,
    fontWeight: 'bold'
  },
  felx: {
    flex: 1
  },
  grade: {
    fontSize: totalSize(3),
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: color.trackGreen,
    marginTop: height(6)
  },
  gradeButtons: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: height(5),
    marginBottom: height(4)
  },
})