import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import color from '../../styles/color.js';
import { headerStyles } from '../../styles/SymptomTracking/track.js';

class TrackHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: {},
      page: props.state,
      type: props.navigation.params ? props.navigation.params.type : ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.state !== nextProps.state) {
      this.setState({
        page: nextProps.state
      });
    }
  }

  render() {
    const { page, type } = this.state;
    console.log("page: ", page, " type: ", type);
    return(
      <View>
        <Text>Sliding Header Comes here</Text>
      </View>
    )
  }
}

export default TrackHeader;
