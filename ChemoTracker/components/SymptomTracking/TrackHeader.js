import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import styles from '../../styles/main.js';
import color from '../../styles/color.js';
import { headerStyles} from '../../styles/SymptomTracking/form.js';

class TrackHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: {},
      page: props.state
    };
    this.createEvent = this.createEvent.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.state !== nextProps.state) {
      this.setState({
        page: nextProps.state
      });
    }
  }

  createEvent() {
    const p = this.props;
  }


  render() {
    const { page } = this.state;
    console.log("page: ", page);
    return(
      <View>
        {page === 'agenda' ?
          <TouchableOpacity
            onPress={this.createEvent}
            style={headerStyles.headerPlus}>
            <Icon
              size={24}
              name="plus"
              color={color.iconPlusColor} />
          </TouchableOpacity> :
          <TouchableOpacity
            onPress={this.createEvent}
            style={eventStyles.cancelSaveButton}>
            <Text style={eventStyles.buttonText}>Save</Text>
          </TouchableOpacity>
        }
      </View>
    )
  }
}

export default TrackHeader;
