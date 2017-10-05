import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './Navigation.js';

// class Next extends React.Component {
//   static navigationOptions = {
//     title: 'Next page',
//   };
//   render() {
//     return (
//       <View>
//         <Text>This is the next page</Text>
//       </View>
//     );
//   }
// }

const Track = ({ navigation }) => (
  <Navigation banner="Track Tab" navigation={navigation} />
);

Track.navigationOptions = {
  tabBarLabel: 'Track',
};

export default Track;
