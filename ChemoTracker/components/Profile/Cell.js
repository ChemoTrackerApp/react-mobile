import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import moment from 'moment';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.sectionTitle = props.sectionTitle;
    this.details = props.data;
    this.state = { editMode: false,
      startDate: moment(),
      selectedOption: '',};
  }

  turnEditStateOn = () => {
    this.setState({
      editMode: true
    })
  }

  turnEditStateOff = () => {
    this.setState({
      editMode: false
    })
  }

  setDate = (date) => {
    console.log(date);
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
    return (
      <View style = {styles.profileSectionCell}>
        <View style = {styles.profileSectionTitleBox}>
          <View>
            <Text style = {styles.profileSectionTitle}> {this.sectionTitle} </Text>
          </View>
          <View style = {styles.editIcon}>
            {
              this.state.editMode ?
                <TouchableWithoutFeedback onPress={this.turnEditStateOff} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                  <Icon size={22} name="done" color={color.navBarIcon} />
                </TouchableWithoutFeedback> :
                <TouchableWithoutFeedback onPress={this.turnEditStateOn}>
                  <Icon size={20} name="edit" color={color.navBarIcon} />
                </TouchableWithoutFeedback>
            }
          </View>
        </View>
        <View style = {styles.profileDetails}>
          {
            this.state.editMode ?
              this.createEditViewFromDetailsData() :
              this.createViewFromDetailsData()
          }
        </View>
      </View>
    );
  }

  createViewFromDetailsData() {
    return this.details.data.map((detailItem) => {
      return (
        <View key = {detailItem.title} style = {styles.profileDetailCell}>
          <View style = {styles.profileDetailTitleTextBox}>
            <Text style = {styles.profileDetailTitle}> {detailItem.title.toUpperCase()} </Text>
          </View>
          <View style = {styles.profileDetailDescriptionTextBox}>
            <Text style = {styles.profileDetailDescription}> {detailItem.description} </Text>
          </View>
        </View>
      )
    });
  }

  createEditViewFromDetailsData() {
    return this.details.data.map((detailItem) => {
      return (
        <View key = {detailItem.title} style = {styles.profileEditDetailCell}>
          <View style = {styles.profileDetailTitleTextBox}>
            <Text style = {styles.profileDetailTitle}>{detailItem.title.toUpperCase()}</Text>
          </View>
          <TextInput
            style={styles.profileTextInput}
            onChangeText={(text) => this.setState({text})}
            value={detailItem.description}
          />
          <View style = {styles.horizontalLine}/>
        </View>
      )
    });
  }

  createEditDateViewFromDetailsData() {
    return this.details.data.map((detailItem) => {
      return (
        <View key = {detailItem.title} style = {styles.profileEditDetailCell}>
          <View style = {styles.profileDetailTitleTextBox}>
            <Text style = {styles.profileDetailTitle}>{detailItem.title.toUpperCase()}</Text>
          </View>
          <DatePicker
            selected={moment()}
            onChange={this.setDate}
          />
          <View style = {styles.horizontalLine}/>
        </View>
      )
    });
  }

  createSelectViewFromDetailsData() {
    const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;
    return this.details.data.map((detailItem) => {
      return (
        <View key = {detailItem.title} style = {styles.profileEditDetailCell}>
          <View style = {styles.profileDetailTitleTextBox}>
            <Text style = {styles.profileDetailTitle}>{detailItem.title.toUpperCase()}</Text>
          </View>
          <Select
            name="form-field-name"
            value={value}
            onChange={this.handleChange}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
            ]}
          />
          <View style = {styles.horizontalLine}/>
        </View>
      )
    });
  }


}

export default Cell;
