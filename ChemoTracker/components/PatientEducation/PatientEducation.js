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
    tabBarIcon: () => (<FontAwesomeIcon size={24} name="search" color={color.navBarIcon} />)
  }

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      searchInputEdited: false,
      question: ''
    };
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('refreshState', (e) => {
      this.setState({ searchInputEdited: false, question: '' })
    })
  }

  handleTextChange = (text) => {
    if (text.length > 0) {
      this.setState({ searchInputEdited: true, question: text })
    } else {
      this.setState({ searchInputEdited: false, question: text })
    }
  }

  handleQuestionSubmit = (text) => {
    this.props.navigation.navigate('Search', { searchQuery: this.state.question })
  }

  handleForumSubmit = () => {
    this.props.navigation.navigate('Forum')
  }

  handleInputFocus = () => this.setState({ isFocused: true })

  handleInputBlur = () => this.setState({ isFocused: false })

  handleClearInput = () => {
    this.searchInput.clear();
    this.setState({ searchInputEdited: false, question: '' });
  }

  renderClearButton() {
    if (this.state.searchInputEdited && this.state.isFocused) {
      return (
        <View style={searchStyles.clearButton}>
          <TouchableOpacity onPress={() => this.handleClearInput()}>
            <FontAwesomeIcon name="remove" size={23} color={color.searchIcon} />
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={searchStyles.container}>
        <View style={searchStyles.section}>
          <FontAwesomeIcon name="stethoscope" size={100} color={color.searchIcon} />
          <Text style={searchStyles.label}>Questions?</Text>
          <TextInput
            ref={(ref) => { this.searchInput = ref }}
            underlineColorAndroid="transparent"
            style={searchStyles.input}
            value={this.state.question}
            placeholder="Search resources"
            placeholderTextColor={color.searchPlaceholder}
            onChangeText={this.handleTextChange}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
          />
          {this.renderClearButton()}
          <Button
            style={searchStyles.submitButton}
            textStyle={{ color: '#fff' }}
            isDisabled={!this.state.question}
            onPressIn={this.handleQuestionSubmit}>
            Search
          </Button>
        </View>
      </View>
    );
  }
}

export default PatientEducation;
