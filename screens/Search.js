import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, Image } from 'react-native';
import Menu from './Menu'
import SearchBar from 'react-native-material-design-searchbar'

export default class Search extends Component {
	
	static navigationOptions = {
		header: <SearchBar
			inputStyle={{ backgroundColor: '#535353', justifyContent: 'center', borderWidth: 0, alignItems: 'center',}}
			onSearchChange={() => console.log('On Search Change')}
			height={50}
			onFocus={() => console.log('On Focus')}
			onBlur={() => console.log('On Blur')}
			placeholder={'Cari...'}
			autoCorrect={false}
			padding={0}
			returnKeyType={'search'}
		/>
  }
	
	render() {
    return (
			<View style={styles.homeStyle}>
				<View style={{ flex: 1, flexDirection: 'column',justifyContent: 'center'  }}>
					<Image source={require('../public/assets/img/searchbig.png')} style={styles.iconMenu}/>
					<Text style={{ alignItems: 'center', alignSelf: 'center', paddingTop: 10, color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 }}>Cari Spotifree</Text>
					<Text style={{ alignItems: 'center', alignSelf: 'center', paddingTop: 10, color: '#FFFFFF', fontSize: 14 }}>Temukan musik dan podcast favoritmu.</Text>
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
	},
	iconMenu: {
		alignSelf: 'center', 
		justifyContent: 'center',
		height: 100,
		width: 100,
		tintColor: '#fff',
		alignItems: 'center'
  }
})