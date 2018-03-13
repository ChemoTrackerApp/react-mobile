import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import CategoryCell from './Cell.js';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';

class ProfileDetailsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: this.props.sections,
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.sections != this.props.sections){
      this.setState({
        sections: nextProps.sections
      });
    }
  }

  render() {
    return (
      <ScrollView style = {styles.profileTable} pagingEnabled={true} showsVerticalScrollIndicator={true}>
      {this.renderCells()}
      </ScrollView>
    );
  }

  renderCells(){
    if(this.state.sections != null){
      return this.state.sections.map((section) => {
          return(<CategoryCell key={section.title} sectionTitle={section.title}  data={section.data}/>)
      });
    }
  }
}

export default ProfileDetailsTable;
