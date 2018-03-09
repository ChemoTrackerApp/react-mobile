import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableWithoutFeedback, TouchableOpacity, Picker } from 'react-native';
import { TabNavigator } from 'react-navigation';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-datepicker';
import ModalFilterPicker from 'react-native-modal-filter-picker';
import TagInput from 'react-native-tag-input';
import Collapsible from 'react-native-collapsible';
import moment from 'moment';

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.sectionTitle = props.sectionTitle;
    this.details = props;
    this.state = { editMode: false,
      date:new Date(),
      selectedOption: '',
      visible: false,
      picked: null,
      collapsed: true,
      allergies: [],
      text: "text"
    };
    this.setDate = this.setDate.bind(this);
  }

  handleDelete = index => {
     let tagsSelected = this.state.tagsSelected;
     tagsSelected.splice(index, 1);
     this.setState({ tagsSelected });
  }

  handleAddition = suggestion => {
     this.setState({ tagsSelected: this.state.tagsSelected.concat([suggestion]) });
  }

  onShow = () => {
    this.setState({ visible: true });
  }

  onSelect = (suggestion) => {
    console.log(suggestion) // the pressed suggestion
    this.setState({ visible: false });
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

  setGender = (itemValue, itemIndex) => {
    console.log(itemValue);
    this.setState({
      collapsed: true
    })
  }

  showDropdown = () => {
    this.setState({
      collapsed: false
    })
  }

  setDate(newDate) {
    this.setState({date: newDate})
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    return (
      <View style = {styles.profileSectionCell}>
        <View style = {styles.profileSectionTitleBox}>
          <View>
            <Text style = {styles.profileSectionTitle}> {this.sectionTitle} </Text>
          </View>
        </View>
        <View style = {styles.profileDetails}>
          {
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
      let input = null;
      if (detailItem.inputType == "text") {
        input = ( <TextInput
          style={styles.profileTextInput}
          onChangeText={(text) => this.setState({text})}
          value={detailItem.description}
        />);
      } else if (detailItem.inputType == "date") {
        calIcon = (<EntypoIcon size={22} name="calendar" color={color.lightGray} />);
        input = ( <DatePicker
          date={this.state.date}
          onDateChange={this.setDate}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconComponent={calIcon}
          customStyles={{
            btnTextText: {
              color: color.navBarIcon,
              fontSize:40,
            },
            dateText: {
              color: color.black,
            },
            dateInput: {
              borderWidth: 0,
              justifyContent: 'center',
              alignItems: 'flex-start'
            }
          }}
        /> );
      } else if (detailItem.inputType == "dropdown") {
        input = (
          <View>
            <TouchableOpacity style={styles.buttonContainer} onPress={this.showDropdown}>
              <Text>{detailItem.description}</Text>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.collapsed}>
              <Picker onValueChange={this.setGender} style={styles.picker}>
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Non-Binary" value="nonbinary" />
              </Picker>
            </Collapsible>
          </View>);
      } else if (detailItem.inputType == "modaldropdown") {
        options = [
          {
            key: 'kenya',
            label: 'Kenya',
          },
          {
            key: 'uganda',
            label: 'Uganda',
          },
          {
            key: 'libya',
            label: 'Libya',
          },
          {
            key: 'morocco',
            label: 'Morocco',
          },
          {
            key: 'estonia',
            label: 'Estonia',
          },
        ];
        input = (
          <View>
            <TouchableOpacity style={styles.buttonContainer} onPress={this.onShow}>
              <Text>Select diagnosis</Text>
            </TouchableOpacity>
            <ModalFilterPicker
              visible={this.state.visible}
              onSelect={this.onSelect}
              onCancel={this.onSelect}
              options={options}/>
          </View>);
      } else if (detailItem.inputType == "multitext") {
        input = (
          <TagInput
            value={this.state.allergies}
            onChange={(emails) => this.setState({ emails })}
            labelExtractor={(email) => email}
            text={this.state.text}
            onChangeText={(text) => this.setState({ text })}/>);
      }

      return (
        <View key = {detailItem.title} style = {styles.profileEditDetailCell}>
          <View style = {styles.profileDetailTitleTextBox}>
            <Text style = {styles.profileDetailTitle}>{detailItem.title.toUpperCase()}</Text>
          </View>
          {input}
          <View style = {styles.horizontalLine}/>
        </View>
      )
    });
  }
}
