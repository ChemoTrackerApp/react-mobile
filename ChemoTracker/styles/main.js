import React from 'react';
import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  arrowIcon: {
    marginLeft: '2%',
    marginTop: '1.2%'
  },
  centerText: {
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feelingTextFont: {
    fontSize: totalSize(3.8)
  },
  feelingTextMargin: {
    marginTop: "4%"
  },
  headerImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    backgroundColor: 'transparent',
    color: '#fff',
    textAlign: 'center',
    fontSize: totalSize(3.5),
    position: 'absolute',
    top: '10%'
  },
  homeContainer: {
    position: 'absolute',
    marginTop: '13%',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  starfishImage: {
    marginTop: '10%',
    position: 'absolute',
    height: "20%",
    width: '50%',
    resizeMode: 'contain'
  },
  streaksContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  streaksText: {
    fontSize: totalSize(3.7),
    color: '#fff'
  },
  trackButton: {
    height: height(7),
    width: width(70),
    borderRadius: 15,
    marginTop: "5%",
    marginLeft: "2%",
    justifyContent: 'center',
    backgroundColor: 'rgb(251,91,27)'
  },
  trackContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  trackMargin: {
    marginTop: '99%'
  },
  trackText: {
    backgroundColor: 'transparent',
    fontSize: totalSize(2.3),
    fontFamily: 'open-sans-semibold',
    color: '#fff',
    textAlign: 'left'
  },
  trackTextFont: {
    fontSize: totalSize(2.1)
  },
  trackTextMargin: {
    marginLeft: '10%'
  },
  trackTextColor: {
    color: 'rgb(251,91,27)'
  }
});

export default styles;
