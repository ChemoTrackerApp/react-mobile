import React from 'react';
import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import color from '../color.js';

export const headerStyles = StyleSheet.create({
  headerBackground:{
    backgroundColor: '#F4FAFC'
  },
  headerTitleStyle: {
    color: '#000000'
  },
  headerBackTitleStyle: {
    color: '#000000'
  },
  headerPlus: {
    marginRight: 10
  }
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.searchBackground
  }
})