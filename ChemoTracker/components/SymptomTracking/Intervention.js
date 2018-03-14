import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../../styles/SymptomTracking/intervention.js';
import color from '../../styles/color.js';
import { getInterventions } from '../../services/symptomTracking.js';


class InterventionScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Track",
    tabBarIcon: () => (<FontAwesomeIcon size={ 24 } name="heartbeat" color={ color.navBarIcon } />)
  }

  constructor(props){
    super(props);
    this.dismissButton = this.dismissButton.bind(this);
    this.state = {
      data: {
        interventions: [],
        tips: []
      },
      error: null
    };
  }

  async componentDidMount() {
    const token = this.props.screenProps.token;
    const symptom = this.props.screenProps.index+1;
    const grade = this.props.navigation.state.params.selectedgrade+1;
    let response = getInterventions(symptom, grade, token)
    .then((responseJson) => {
      console.log("responseJson", responseJson);
      this.setState({
        data: {
          interventions: responseJson.interventions,
          tips: responseJson.tips,
        }
      });
    })
    .catch((error) => {
      console.error(error);
      this.setState({ error: error });
    });
  }

  dismissButton() {
    this.props.navigation.navigate("Form");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.interventionsSection}>
          <EvilIcons name = "exclamation" size={55} color={color.trackTitle}/>
          <View style={styles.interventionsContent}>
            {
              this.state.data.interventions.map((desc, index) => {
                return (<Text key={index} style={styles.interventionsText}> {desc.description} </Text>);
              })
            }
          </View>
        </View>
        <View style={styles.tipsSection}>
          <Text style={styles.content}>Helpful Tips</Text>
          {
            this.state.data.tips.map((item, itemIndex) => {
              return (
                <View key={itemIndex} style={styles.tipsSubsection}>
                  <View key={itemIndex} style={styles.tipsContent}>
                    {
                      item.description.map((tip, tipIndex) => {
                        return (<Text key={tipIndex} style={styles.tipsText}> {tip} </Text>);
                      })
                    }
                  </View>
                  <MaterialIcon name={item.icon} size={40} color={color.searchIcon}/>
                </View>
              );
            })
          }
        </View>
        <View style={styles.dismissSection}>
          <Button
            style={styles.dismissButton}
            textStyle={{color: '#fff'}}
            onPressIn={ this.dismissButton }>
              Got it!
          </Button>
        </View>
      </View>
    );
  }
}

export default InterventionScreen;
