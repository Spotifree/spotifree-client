import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import Menu from './Menu'
import SearchBar from 'react-native-search-bar'
// let cari = <SearchBar
// 							ref='searchBar'
// 							placeholder='Cari'
// 							onChangeText=''
// 							onSearchButtonPress=''
// 							onCancelButtonPress=''
// 						/>
export default class Search extends Component {
	
	static navigationOptions = {
		title: 'Search',
		headerLeft: null,
		headerStyle: { backgroundColor: '#333333', height: 80 },
		headerTitleStyle: { alignSelf: 'center', color: '#FFFFFF', fontSize: 15 }
  }
	
	render() {
    return (
			<View style={styles.homeStyle}>
				<View style={{ flex: 1 }}>
					
				</View>
				<Menu navigation={this.props.navigation}/>
			</View>
		)
  }
}

const styles = StyleSheet.create({
	homeStyle: { 
		backgroundColor: '#1a1a1a', 
		flex: 1,
		justifyContent: 'center',
	}
})