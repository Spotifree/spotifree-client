import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, Image } from 'react-native';
import Menu from './Menu'

export default class MyAccount extends Component {
	static navigationOptions = {
		tabBarLabel: null,
		tabBarIcon: () => (
      <Image
        source={require('../public/assets/img/coll.png')}
				style={styles.icon}
				resizeMode={'contain'}
      />
    ),																																			
		title: 'My Account',
		headerLeft: null,
		headerStyle: { backgroundColor: '#333333', height: 50 },
		headerTitleStyle: { alignSelf: 'center', color: '#FFFFFF', fontSize: 15 }
	}
	
	render() {
    return (
			<View style={styles.homeStyle}>
				<View style={{ flex: 1 }}>
					<Text style={{ alignSelf: 'center', color: '#FFFFFF' }}>MyAccount Page</Text>
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
	}, icon: {
		alignSelf: 'center', 
    height: 30,
  },
})