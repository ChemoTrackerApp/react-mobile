import React, { Component } from 'react';
import { View, ListView, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem } from "react-native-elements";
import { TabNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/search.js';
import color from '../styles/color.js';

class PatientEducation extends Component {
	static navigationOptions = {
		tabBarLabel: "Search",
		tabBarIcon: () => (<FontAwesomeIcon size={24} name="search" color={color.navBarIcon} />)
  }
  
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View style={ styles.separator }>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
     
	render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.navBar }> 
          <View style={ styles.button }> 
            <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
              <IonIcon name="ios-arrow-back" size={ 40 } color={ color.arrowIcon }/>
            </TouchableOpacity>
          </View>
        </View>
        <List containerStyle={ styles.listContainer }>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
                avatar={{ uri: item.picture.thumbnail }}
                containerStyle={ styles.listItemContainer }
              />
            )}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
          />
        </List>
      </View>      
    );
  }
}

export default PatientEducation;