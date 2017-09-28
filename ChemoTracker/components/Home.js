import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calendar from './Calendar';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Calendar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: "100%",
    width: "100%",
  },
});

export default Home;
