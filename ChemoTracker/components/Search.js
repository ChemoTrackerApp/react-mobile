import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/search.js';
import color from '../styles/color.js';

class Search extends Component {
  static navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: () => (<FontAwesomeIcon size={ 24 } name="search" color={ color.navBarIcon } />)
  }

  state = {
    question: ''
  }

  handleTextChange = (text) => {
    console.log(text)
    this.setState({ question: text })
  }

  handleQuestionSubmit = (text) => {
    console.log("handleQuestionSubmit")
    this.props.navigation.navigate('PatientEducation', { searchQuery: this.state.question })
  }

  handleForumSubmit = () => {
    console.log("handleForumSubmit")
    this.props.navigation.navigate('Forum')
  }
  

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.navBar }/>
        <View style={ styles.section }>
          <FontAwesomeIcon name = "stethoscope" size={ 100 } color={ color.searchIcon } />
          <Text style={ styles.label }>Questions?</Text>
          <TextInput 
            style={ styles.input } 
            placeholder="Search resources"
            placeholderTextColor={ color.searchPlaceholder }
            onChangeText={ this.handleTextChange }
            onSubmitEditing={ this.handleQuestionSubmit } 
          />
        </View>
        <View style={ styles.section }>
          <TouchableOpacity onPress={ this.handleForumSubmit }>
            <MaterialIcon name="forum" size={ 100 } color = { color.searchIcon } />
            <Text style={ styles.label }>Ask Forum</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

export default Search;
