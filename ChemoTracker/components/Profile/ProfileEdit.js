import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import CategoryCell from './Cell.js';
import styles from '../../styles/profile-main.js';
import color from '../../styles/color.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Form, Separator,InputField, LinkField, SwitchField, PickerField, DatePickerField, TimePickerField} from 'react-native-form-generator';

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: null
    }
  }

  dismissView = () => {
    this.props.navigation.goBack();
  }

  saveChanges = () => {
    this.props.navigation.goBack();
  }

  static navigationOptions  = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
    tabBarLabel: "Profile" ,
		tabBarIcon: () => (<Icon size={24} name="person" color={color.navBarIcon} />),
    headerRight: <TouchableOpacity
      onPress = {this.openEditView}>
      <Text style={styles.profileButton}>Save</Text>
    </TouchableOpacity>,
    headerLeft: <TouchableOpacity onPress={ () => { navigation.goBack() }}
                  style={styles.profileBackButton}>
                  <Icon size={24} name="chevron-left"
                      color='#FFFFFF'/>
                </TouchableOpacity>
    }
 	}

  componentDidMount () {
    this.props.navigation.setParams({ saveAndExit: this.saveChanges,  dismiss: this.dismissView})
  }

  handleFormChange(formData){
    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }

  handleFormFocus(e, component){
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
