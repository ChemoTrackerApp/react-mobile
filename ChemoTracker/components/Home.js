import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigation } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text>This is the home screen</Text>
        <Navigation banner="Home Tab9" navigation={navigation}/>
      </ScrollView>
    );
  }
}

// const Home = ({ navigation }) => (
//   <View>
//     <Text>HOME SCREEENNN</Text>
//     <Navigation banner="Home Tab" navigation={navigation}/>
//   </View>
// );

Home.navigationOptions = {
  tabBarLabel: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;
