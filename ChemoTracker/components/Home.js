import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/main.js';
import color from '../styles/color.js';
import { getStreak } from '../services/symptomTracking.js';
import {  getProfile } from '../services/profileServices.js';


class Home extends Component {

  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: () => (<Icon size={24} name="home" color={color.navBarIcon} />)
  }
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      token: props.screenProps.token,
      streak:0,
      nameLoaded: false,
      name:''
    };
    console.log("homeprops ", props);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-semibold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
      'open-sans-light': require('../assets/fonts/OpenSans-Light.ttf'),
      'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf')
    });
    let streak = getStreak(this.state.token)
    .then((responseJson) => {
      console.log("responseJson", responseJson);
      if(responseJson.streak) {
        this.setState({
          streak: responseJson.streak
        });
      }});
    let name = getProfile(this.state.token)
    .then((responseJson) => {
      if(responseJson.firstName){
        this.setState({
          name: "\n" + responseJson.firstName,
          nameLoaded:true
        });
      }
    });
    this.setState({ fontLoaded: true });
  }

  trackClicked = () => {
    this.props.navigation.navigate("Tracking", this.navigationOptions);
  }

  render() {
    return (
      <Image style={styles.headerImage}
        source={require('../assets/img/home-bg.jpg')}>
        {this.state.fontLoaded ? (
          <Text style={[{ fontFamily: 'open-sans-light' }, styles.headerText]}>
            Hello
            {this.state.nameLoaded ? (
              <Text style={{ fontFamily: 'open-sans-semibold' }}>{this.state.name}</Text>
            ) : null}!
          </Text>
        ) : null}
        <Image style={styles.starfishImage} source={require('../assets/img/starfished.png')} />
        {this.state.fontLoaded ? (
          <View style={styles.homeContainer}>
            <View style={styles.streaksContainer}>
              <Text style={[styles.streaksText, { fontFamily: 'open-sans-semibold' }]}>{this.state.streak}</Text>
            </View>
            <View style={styles.trackMargin}>
              <Text style={styles.centerText}>
                <Text style={[{ fontFamily: 'open-sans-light' }, styles.trackTextFont]}>You&#39;ve tracked your health for </Text>
                <Text style={[{ fontFamily: 'open-sans-semibold' }, styles.trackTextFont, styles.trackTextColor]}>{this.state.streak} days</Text>
                <Text style={[{ fontFamily: 'open-sans-light' }, styles.trackTextFont]}> in a row</Text>
              </Text>
              <Text style={[{ fontFamily: 'open-sans-light' }, styles.feelingTextFont, styles.feelingTextMargin]}>
                How are you feeling{"\n"}
                <Text style={[{ fontFamily: 'open-sans-regular' }, styles.feelingTextFont]}>today?</Text>
              </Text>
              <TouchableOpacity
                style={styles.trackButton}
                onPress={this.trackClicked}>
                <View style={styles.trackContainer}>
                  <View style={styles.trackTextMargin}>
                    <Text>
                      {
                        this.state.fontLoaded ? (<Text style={styles.trackText}> Track symptoms </Text>) : null
                      }
                    </Text>
                  </View>
                  <Icon style={styles.arrowIcon} size={20} name="arrow-right" color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : null
        }
      </Image>
    );
  }
}

export default Home;
