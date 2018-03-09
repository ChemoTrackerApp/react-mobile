import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Linking, ListView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { List, ListItem } from "react-native-elements";
import { TabNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { searchStyles } from '../../styles/PatientEducation/patient-education.js';
import color from '../../styles/color.js';

const api = 'http://ec2-52-15-106-40.us-east-2.compute.amazonaws.com:8000';

export const getSearchResults = (searchQuery) => {
  const queryparams = `query=${searchQuery}`;
  return fetch(`${api}/patient-education/posts?${queryparams}`, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(res => {
    return res.json();
  });
}

class Search extends Component {
	static navigationOptions = {
		tabBarLabel: "Search",
		tabBarIcon: () => (<FontAwesomeIcon size={24} name="search" color={color.navBarIcon} />)
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      page: 1,
      error: null,
      refreshing: false
    };

    this.searchQuery = props.navigation.state.params.searchQuery;
  }
  
    
  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page } = this.state;
    this.setState({ loading: true });
    getSearchResults(this.searchQuery)
      .then(res => { 
        this.setState({
          data: page === 1 ? res.posts : [...this.state.data, ...res.posts],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      },() => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    // Remove once backend is able to handle this request
    // this.setState(
    //   {
    //     page: this.state.page + 1
    //   }, () => {
    //     this.makeRemoteRequest();
    //   }
    // );
  };

  handleClick = (item) => {
    WebBrowser.openBrowserAsync(item.url);
  }

  renderSeparator = () => {
    return (
      <View style={ searchStyles.searchSeparator }/>
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View style={ searchStyles.separator }>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  renderResults = () => {
    return (
      <List containerStyle={ searchStyles.listContainer }>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={
                <View style={ searchStyles.titleView }>
                  <Text style={ searchStyles.titleText }>{ item.title }</Text>
                </View>
              }
              subtitle={
                <View style={ searchStyles.subtitleView }>
                  <Text style={ searchStyles.subtitleText }>{ item.content }</Text>
                </View>
              }
              containerStyle={ searchStyles.listItemContainer }
              onPress={ () => this.handleClick(item) }
            />
          )}
          keyExtractor={item => item.url}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </List>
    );
  }

  renderNoResults = () => {
    return (
      <View style={ searchStyles.section }>
        <Text style={ searchStyles.noResults }> 
          <Text style={ searchStyles.bold }> No results for </Text> 
          { this.searchQuery }
        </Text> 
          <Text style={ searchStyles.noResultsDesc }> 
            The query you entered did not bring up any results.
          </Text>
      </View>
    );
  }
     
	render() {
    return (
      <View style={ searchStyles.container }>
        {
          this.state.data.length > 0 && !this.state.loading ? this.renderResults() : !this.state.loading ? this.renderNoResults() : null
        }
      </View>      
    );
  }
}

export default Search;