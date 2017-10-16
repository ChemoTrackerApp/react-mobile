import React from 'react';
import { StyleSheet } from 'react-native';
const calStyles = StyleSheet.create({
  agenda: {
    flex: 1,
    width: 370,
    height: 100
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

export default calStyles;
