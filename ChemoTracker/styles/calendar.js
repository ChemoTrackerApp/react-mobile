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
  headerContainer: {
    marginTop: 0,
    paddingTop: 0,
    top: 0,
    height: 40,
    backgroundColor: '#006760'
  },
  headerTitleStyle: {
    color: '#ffffff',
    marginBottom: 15
  },
  headerLeft: {
    marginLeft: 15,
    marginBottom: 15
  },
  headerPlus: {
    marginRight: 10
  }
});

export const historyStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#FAFAFA',
  },
  historyContainer: {
    width: width(97),
    height: 80,
    marginLeft: 15,
    paddingRight: 15
  },
  historyText: {
    fontSize: 20,
    color: '#686661',
    marginLeft: 10,
    width: width(70)
  },
  symptomContainer: {
    borderBottomWidth: 2.5,
    borderBottomColor: '#F2F2F2',
    height: 60,
    paddingBottom: 15,
    paddingTop: 25,
    flex: 1,
    flexDirection: 'row'
  },
  grade: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0B6767'
  },
  gradeText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 15,
    marginTop: 7.5
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

export const datePickerStyles = {
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0
  },
  dateInput: {
    marginLeft: 36
  }
};

export const mapStyles = StyleSheet.create({
  mapContainer: {
    height: height(92)
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  searchBar: {
    width: width(100),
    flex:1
  }
});
