import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is the home screen</Text>
        <Button
          onPress={() => navigate('Next')}
          title="go to the next page"
        />
      </View>
    );
  }
}

export default Home;
