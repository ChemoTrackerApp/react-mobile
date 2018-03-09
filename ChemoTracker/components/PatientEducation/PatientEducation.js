import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button'
import { DeviceEventEmitter } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { searchStyles } from '../../styles/PatientEducation/patient-education.js';
import color from '../../styles/color.js';

class PatientEducation extends Component {
  static navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: () => (<FontAwesomeIcon size={ 24 } name="search" color={ color.navBarIcon } />)
  }

  constructor(props) {
    super(props);
    this.state = {
      question: ''
    };
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('refreshState', (e)=>{ this.setState({question: ''})})
  }

  handleTextChange = (text) => {
    this.setState({ question: text })
  }

  handleQuestionSubmit = (text) => {
    this.props.navigation.navigate('Search', { searchQuery: this.state.question })
  }

  handleForumSubmit = () => {
    this.props.navigation.navigate('Forum')
  }

  render() {
    return (
      <View style={ searchStyles.container }>
        <View style={ searchStyles.section }>
          <FontAwesomeIcon name = "stethoscope" size={ 100 } color={ color.searchIcon } />
          <Text style={ searchStyles.label }>Questions?</Text>
          <TextInput 
            style={ searchStyles.input } 
            value={ this.state.question }
            controlled={ true }
            placeholder="Search resources"
            placeholderTextColor={ color.searchPlaceholder }
            onChangeText={ this.handleTextChange }
          />
          <Button 
            style={searchStyles.submitButton} 
            textStyle={{color: '#fff'}}
            isDisabled={ !this.state.question }
            onPressIn={ this.handleQuestionSubmit }>
              Search
          </Button>
        </View>
      </View>
    );
  }
}

export default PatientEducation;
