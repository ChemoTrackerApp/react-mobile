import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Platform, SampleText } from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';
import Home from './Home.js';
import Track from './Track.js';

const Navigation = ({ navigation, banner }) => (
  <View style={styles.container}>
    <Text>{banner}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default Navigation;
