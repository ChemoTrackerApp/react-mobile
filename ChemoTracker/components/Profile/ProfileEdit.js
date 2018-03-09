import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableWithoutFeedback, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import CategoryCell from './Cell.js';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Form, Separator,InputField, LinkField, SwitchField, PickerField, DatePickerField, TimePickerField} from 'react-native-form-generator';
import moment from 'moment';

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const btn = <Button
      onPress = {() => {
        console.log(this.props)
        console.log("save");
        console.log(this.props.navigation.navigate("Profile"));
      }}
      title = "Save"
      color = {color.white}
    />;
  }

  dismissView = () => {
    console.log("dismissView");
    this.props.navigation.goBack();
  }

  saveChanges = () => {
    console.log("save changes");
    this.props.navigation.goBack();
  }

  static navigationOptions  = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
    tabBarLabel: "Profile" ,
		tabBarIcon: () => (<Icon size={24} name="person" color={color.navBarIcon} />),
    headerRight: <Button
      onPress = {() => params.saveAndExit()}
      title = "Save"
      color = {color.white}/>,
    headerLeft: <Button
      onPress = {() => params.dismiss()}
      title = "Cancel"
      color = {color.white}/>
    }
 	}

  componentDidMount () {
    this.props.navigation.setParams({ saveAndExit: this.saveChanges,  dismiss: this.dismissView})
  }

  handleFormChange(formData){
    /*
    formData will contain all the values of the form,
    in this example.

    formData = {
    first_name:"",
    last_name:"",
    gender: '',
    birthday: Date,
    has_accepted_conditions: bool
    }
    */

    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }

  handleFormFocus(e, component){
    //console.log(e, component);
  }

  render() {
    return(
      <ScrollView>
        <Form ref='registrationForm' onFocus={this.handleFormFocus.bind(this)} onChange={this.handleFormChange.bind(this)}>
          <Separator label="Personal Details"/>
          <InputField ref='first_name' placeholder='First Name'/>
          <InputField ref='last_name' placeholder='Last Name'/>
          <PickerField ref='gender'
            label='Gender'
            value='female'
            options={{
              "": '',
              female: 'Female',
              male: 'Male',
              nonbinary: 'Non-Binary'
            }}/>
           <DatePickerField ref='birthday'
            minimumDate={new Date('1/1/1900')}
            maximumDate={new Date()}
            iconRight={[<IonIcon style={{alignSelf:'center', marginLeft:10}} color={color.inputGray} name='ios-arrow-forward' size={30} />,
                        <IonIcon style={{alignSelf:'center', marginLeft:10}} color={color.inputGray} name='ios-arrow-down' size={30} />
                        ]}
            placeholder='Birthday'
            mode="date"
          />
          <Separator label="Contact Information"/>
          <InputField ref='phone_number' placeholder='Phone Number' keyboardType="phone-pad"/>
          <InputField ref='email' placeholder='Email Address' keyboardType="email-address"/>
          <Separator label="Allergies"/>
          <InputField ref='allergen' placeholder='Allergen'/>
          <InputField ref='reactions' placeholder='Reaction'/>
          <Separator label="Medical Information"/>
          <InputField ref='medical_conditions' placeholder='Medical Conditions'/>
          <InputField ref='medication' placeholder='Medications'/>
          <Separator label="Cancer History"/>
          <InputField ref='diagnosis' placeholder='Diagnosis'/>
          <InputField ref='chemotherapy' placeholder='Chemotherapy Status'/>

        </Form>
      </ScrollView>
    );
  }
}

export default ProfileEdit;
