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
  symptomIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5
  },
  emptyDate: {
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  iconContainer: {
    flex: 0.5,
    flexDirection: 'row'
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
    width: width(100),
    height: 80,
    marginLeft: 15,
    paddingRight: 15
  },
  historyText: {
    fontSize: 20,
    color: '#686661',
    marginLeft: 10,
    flex: 2,
  },
  symptomContainer: {
    borderBottomWidth: 2.5,
    borderBottomColor: '#F2F2F2',
    height: 60,
    paddingBottom: 15,
    paddingTop: 25,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  grade: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0B6767',
    borderColor: 'black'
  },
  gradeText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 15,
    marginTop: 7.5
  },
  circleContainer: {
    flex: 0.5
  },
  symptomIcon: {
    width: 40,
    height: 40,
    borderRadius: 20
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
  }
});
