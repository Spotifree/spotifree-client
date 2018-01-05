import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import Menu from './Menu'
import Login from './Login'

const redirectLogin = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Welcome'}),
  ]
})

class Home extends Component {
	static navigationOptions = {
		title: 'Home',
		headerLeft: null,
		headerStyle: { paddingTop: 24, backgroundColor: '#333333', height: 80 },
		headerTitleStyle: { alignSelf: 'center', color: '#FFFFFF', fontSize: 15 }
	}
	
	componentWillMount() {
		let isLogin = this.props.isLogin
		if(!isLogin) {
			this.props.navigation.dispatch(redirectLogin)
		}
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


function mapStateToProps(state) {
	return {
		isLogin: state.userReducers.isLogin
	}
}

export default connect(mapStateToProps, null)(Home)