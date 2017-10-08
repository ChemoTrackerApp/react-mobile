import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/main.js';

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: () => (<Icon size={24} name="home" color="#EF7A5A" />)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Home page</Text>
      </View>
    );
  }
}

export default Home;
