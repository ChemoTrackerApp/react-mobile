import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Form from './SymptomTracking/form.js';
import { formStyles } from '../styles/SymptomTracking/form.js';
import styles from '../styles/main.js';
import color from '../styles/color.js';

// class Track extends Component {
//   static navigationOptions = {
//     tabBarLabel: "Track",
//     tabBarIcon: () => (<Icon size={24} name="heartbeat" color={color.navBarIcon} />)
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>This is the Track page</Text>
//       </View>
//     );
//   }
// }
//
// export default Track;

const navOptions = ({navigation}) => (
  {
    title: 'Form',
    headerStyle: headerStyles.headerBackground,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerBackTitleStyle: headerStyles.headerBackTitleStyle,
    headerRight: <CalendarHeader
      state={'form'}
      navigation={navigation.state}
      navigate={navigation.navigate}/>
  }
)

const navOptionsEvent = ({navigation}) => (
  {
    title: 'Intervention',
    headerStyle: headerStyles.headerBackground,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerBackTitleStyle: headerStyles.headerBackTitleStyle,
    headerRight: <CalendarHeader
      state={'intervention'}
      navigation={navigation.state}
      navigate={navigation.navigate}/>
  }
)

const Track = StackNavigator({
  Calendar: {
    screen: Calendar,
    path: 'form',
    navigationOptions: navOptions
  },
  CalendarEvent: {
    screen: CalendarEvent,
    path: '',
    navigationOptions: navOptionsEvent
  }
})

export default Track;
