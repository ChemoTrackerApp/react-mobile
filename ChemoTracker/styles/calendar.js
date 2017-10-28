import React from 'react';
import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
export const calStyles = StyleSheet.create({
  agenda: {
    flex: 1,
    width: width(100),
    height: height(100)
  },
  itemView: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  itemText: {
    color: 'black',
    fontSize: 16
  },
  emptyDate: {
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    flex: 1
  }
});

export const headerStyles = StyleSheet.create({
  headerBackground:{
    backgroundColor: '#F4FAFC'
  },
  headerTitleStyle: {
    color: '#000000'
  },
  headerBackTitleStyle: {
    color: '#000000'
  }
});

export const eventStyles = StyleSheet.create({
  eventTitle: {
    height: 50,
    flex: 1,
    width: width(80)
  }
})
