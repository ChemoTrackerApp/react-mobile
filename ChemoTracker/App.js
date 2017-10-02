import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Home from './components/Home.js';
import Next from './components/Next.js';


const App = StackNavigator({
  Home: { screen: Home },
  Next: { screen: Next }
});


export default App;
