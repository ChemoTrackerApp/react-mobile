import React from 'react';
import { StyleSheet } from 'react-native';
import color from '../color.js';

const styles = StyleSheet.create({
  alignRight: {
    textAlign: 'right'
  }, 
  alignLeft: {
    textAlign: 'left'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.trackBackground,
  },
  content: {
    color: color.trackContent,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 10
  },
  dismissButton: {
    color: color.trackTitle,
    fontWeight: '900', 
    fontSize: 16
  },
  dismissSection: {
    flex: 0.10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  interventionsContent: {
    paddingTop: 15,
    paddingLeft: 40,
    paddingRight: 40
  },
  interventionsText: {
    color: color.trackContent,
    paddingBottom: 8,
    textAlign: 'center'
  },
  interventionsSection: {
    flex: 0.3,
    paddingTop: 30,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: "#CECECE"
  },
  tipsContent: {
    flexDirection: 'column',
    width: 300,
    paddingRight: 30,
    paddingLeft: 30
  },
  tipsSubsection: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#CECECE"
  },
  tipsSection: {
    flex: 0.6
  },
  tipsText: {
    color: color.trackContent,
    fontSize: 12,
    paddingTop: 3
  }
})

export default styles;