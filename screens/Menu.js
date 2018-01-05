import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

const resetHome = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'}),
  ]
})

const resetBrowse = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Browse'}),
  ]
})

const resetSearch = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Search'}),
  ]
})

const resetCollection = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Collection'}),
  ]
})


export default class Menu extends Component {
  render() { 
    return (
      <View style={ styles.menuBar }>
        <TouchableOpacity style={ styles.menuButton } onPress={() => this.props.navigation.dispatch(resetHome)}>
          <Image source={require('../public/assets/img/home.png')} style={styles.iconMenu} resizeMode={'contain'}/>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.menuButton } onPress={() => this.props.navigation.dispatch(resetBrowse)}>
          <Image source={require('../public/assets/img/browse.png')} style={styles.iconMenu} resizeMode={'contain'}/>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.menuButton } onPress={() => this.props.navigation.dispatch(resetSearch)}>
          <Image source={require('../public/assets/img/search.png')} style={styles.iconMenu} resizeMode={'contain'}/>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.menuButton } onPress={() => this.props.navigation.dispatch(resetCollection)}>
          <Image source={require('../public/assets/img/coll.png')} style={styles.iconMenu} resizeMode={'contain'}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	menuBar: { 
		flexDirection: 'row', 
    backgroundColor: '#333333',
    height: 60
	},
	menuButton: { 
    flex: 1,
		// flexGrow: 1,  
		justifyContent: 'center', 
  },
  iconMenu: {
    alignSelf: 'center', 
    height: 30
  }
})