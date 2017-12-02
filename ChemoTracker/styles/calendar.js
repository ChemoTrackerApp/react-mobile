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
  itemTime: {
    color: 'black',
    fontSize: 14
  },
  emptyDate: {
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
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
  },
  headerPlus: {
    marginRight: 10
  }
});

export const eventStyles = StyleSheet.create({
  eventContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30
  },
  eventDetailView: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30
  },
  eventTitle: {
    height: 70,
    fontSize: 24,
    flex: 1,
    width: width(80)
  },
  eventDateTimePickerText: {
    height: 30,
    fontSize: 18,
    flex: 1,
    width: width(80)
  },
  locationView: {
    flexDirection: 'row',
    height: 50,
    marginTop: 10,
    alignItems: 'center'
  },
  eventLocation: {
    height: 50,
    fontSize: 18,
    width: width(75)
  },
  mapText: {
    fontSize: 18
  },
  cancelSaveView: {
    flexDirection: 'row'
  },
  cancelSaveButton: {
    width: width(50),
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    borderColor: '#ffffff',
    borderWidth: 0.5
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'green'
  }
});

export const mapStyles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
