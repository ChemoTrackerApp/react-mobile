import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Button from 'apsl-react-native-button'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../../styles/SymptomTracking/intervention.js';
import color from '../../styles/color.js';

class InterventionScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Track",
    tabBarIcon: () => (<FontAwesomeIcon size={ 24 } name="heartbeat" color={ color.navBarIcon } />)
  }

  constructor(props){
    super(props);
    this.dismissButton = this.dismissButton.bind(this);
  }

  state = {
    data: {
      interventions: [
	      "Take your antinausea medications as directed by your oncology team",
	      "Contact your oncology team for further management"
      ],
      tips: [
        {descriptions: ["Eat small, frequent and bland meals", "Drink small amounts of fluid regularly between meals"], icon: "water"},
        {descriptions: ["Eat at times of day when feelings of nausea are less", "Avoid spicy and fatty foods"], icon: "food-variant"},
        {descriptions: ["Try eating cold foods if smells from hot food are bothersome", "Avoid cooking and strong smells"], icon: "pot"}
      ]
    },
    error: null
  };

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
                return (<Text key={index} style={styles.interventionsText}> {desc} </Text>);
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
                      item.descriptions.map((tip, tipIndex) => {
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
