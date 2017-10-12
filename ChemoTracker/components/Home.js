import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/main.js';
import color from '../styles/color.js';

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: () => (<Icon size={24} name="home" color={color.navBarIcon} />)
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
