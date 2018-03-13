import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/main.js';
import color from '../styles/color.js';

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: () => (<Icon size={24} name="home" color={color.navBarIcon} />)
  }

  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
   await Font.loadAsync({
     'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
     'open-sans-semibold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
     'open-sans-light': require('../assets/fonts/OpenSans-Light.ttf'),
     'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf')
   });
   this.setState({ fontLoaded: true });
  }

  trackClicked = () => {
    this.props.navigation.navigate("Tracking", this.navigationOptions);
  }

  render() {
    return (

      <Image style={{ flex: 1, resizeMode:'stretch', width:null, height:null, justifyContent: 'center', alignItems:'center'}}
        source={require('../assets/img/home-bg.jpg')}>
        {  this.state.fontLoaded ? (
          <Text style={{fontFamily: 'open-sans-light', backgroundColor:'transparent', color:'#fff', textAlign: 'center', fontSize: 24, position: 'absolute', top:'10%'}}>
            Hello{"\n"}
            <Text style={{fontFamily: 'open-sans-semibold'}}> Angela! </Text>
          </Text>

          ) : null
        }
        <Image style={{marginTop: '10%', position: 'absolute', height: "20%", width: '50%', resizeMode: 'contain'}} source={require('../assets/img/starfished.png')}/>
        {  this.state.fontLoaded ? (
          <View style={{ position: 'absolute',marginTop:20, width: '90%', alignSelf:'center', backgroundColor:'transparent'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize:38, color:'#fff', fontFamily:'open-sans-semibold'}}>15</Text>
            </View>
            <View style={{marginTop:'92%'}}>
              <Text style={{textAlign:'center'}}>
                <Text style={{ fontSize:16, fontFamily: 'open-sans-light'}}>You&#39;ve tracked your health for </Text>
                <Text style={{color:'rgb(251,91,27)', fontSize:16, fontFamily:'open-sans-semibold'}}>15 days</Text>
                <Text style={{ fontSize:16, fontFamily: 'open-sans-light'}}> in a row</Text>
              </Text>
              <Text style={{marginTop:"4%", fontFamily: 'open-sans-light', fontSize: 30}}>
                 How are you feeling{"\n"}
                 <Text style={{fontFamily: 'open-sans-regular', fontSize: 30}}>today?</Text>
              </Text>
              <TouchableOpacity
               style={{width: '70.55%',  height: 29, alignSelf:'flex-start', marginLeft:'2%'}}
               onPress={this.trackClicked}>
               <View style={{ backgroundColor: 'rgb(251,91,27)', padding: 15, alignItems: 'flex-start', borderRadius: 51 , marginTop: '10%'}}>
                <Text>
                   {  this.state.fontLoaded ? (
                     <Text
                       style={{
                         backgroundColor: 'transparent',
                         fontSize: 19,
                         fontFamily: 'open-sans-semibold',
                         color: '#fff',
                         textAlign:'left'
                       }}>
                       Track symptoms
                     </Text>  ) : null
                   }
                   <Icon style={{marginLeft: 10}} size={12} name="arrow-right" color="#fff"/>
                   </Text>
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
