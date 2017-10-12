import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Next extends React.Component {
  static navigationOptions = {
    title: 'Next page',
  };
  render() {
    return (
      <View>
        <Text>This is the next page</Text>
      </View>
    );
  }
}

export default Next;
