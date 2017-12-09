import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import styles from '../../../styles/main.js';
import color from '../../../styles/color.js';
import { mapStyles } from '../../../styles/calendar.js';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import SearchBar from 'react-native-material-design-searchbar';
import { width, height, totalSize } from 'react-native-dimension';
import _ from 'lodash';

class Maps extends Component {

  constructor(props) {
    super(props);
    console.log("props", this.props);
    const params = props.navigation.state.params;
    this.state = {
      location: '',
      coordinate: {}
    }
    this.mapRendered = this.mapRendered.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount() {
    Geocoder.setApiKey('AIzaSyCfebotirPL68tLvuahALuqhBil3kTJstk');
  }

  static navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: () => (<Icon size={24} name="calendar" color={color.navBarIcon} />)
  }

  mapRendered() {
    console.log("map is rendered");
  }

  onPress(place) {
    console.log("coordinate pressed", place.coordinate);

    const lat = place.coordinate.latitude;
    const lng = place.coordinate.longitude;

    Geocoder.getFromLatLng(lat, lng).then(
      json => {
        console.log("address", json.results[0].formatted_address);
        this.setState({
          location: json.results[0].formatted_address,
          coordinate: place.coordinate
        });
      },
      error => {
        console.log("error", error);
      }
    );

  }

  render() {
    const { location, coordinate } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <SearchBar
            onSearchChange={() => console.log('On Search Change')}
            height={height(8)}
            onFocus={() => console.log('On Focus')}
            onBlur={() => console.log('On Blur')}
            placeholder={'Search...'}
            autoCorrect={false}
            returnKeyType={'search'}
            inputStyle={StyleSheet.flatten(mapStyles.searchBar)}
          />
          <View style={mapStyles.mapContainer}>
            <MapView
              style={mapStyles.map}
              provider={"google"}
              onMapReady={this.mapRendered}
              onPress={e => this.onPress(e.nativeEvent)}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              {_.isEmpty(coordinate) ? null :
                <MapView.Marker
                  coordinate={coordinate}
                />
              }
            </MapView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Maps;
