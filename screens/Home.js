import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import Menu from './Menu'

export default class Home extends Component {
	static navigationOptions = {
		title: 'Home',
		headerLeft: null,
		headerStyle: { paddingTop: 24, backgroundColor: '#333333', height: 80 },
		headerTitleStyle: { alignSelf: 'center', color: '#FFFFFF', fontSize: 15 }
  }
	
	render() {
    return (
			<View style={styles.homeStyle}>
				<View style={{ flex: 1 }}>
					<Text style={{ alignSelf: 'center', color: '#FFFFFF' }}>Home Page</Text>
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