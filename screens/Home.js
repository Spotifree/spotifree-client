import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button, TouchableHighlight, Content, List, ScrollView, ListView, Row, FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import Axios from 'axios'

import realm from '../realm'
import Menu from './Menu'
import Login from './Login'
import { getAllMusics } from '../actions/musics'

const redirectLogin = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Welcome'}),
  ]
})

const mood = [
	{
		judul: 'Semangat Pagi',
		thumbnail: 'https://i.scdn.co/image/4356e6b859453084ddfad249df8f080e6fcb94fb'
	},
	{
		judul: 'Mager Parah',
		thumbnail: 'https://i.scdn.co/image/2e1959cb961a1e412fb4befaacbe9934a9b8380c'
	},
	{
		judul: 'Kopikustik',
		thumbnail: 'https://i.scdn.co/image/2b7c3c825cb4219494e84f794518e289aff9de72'
	},
	{
		judul: 'Santai Sejenak',
		thumbnail: 'https://i.scdn.co/image/df0c36fac114967555a313d813e5c9914e1fee89'
	},
	{
		judul: 'Yang Penting Happy',
		thumbnail: 'https://i.scdn.co/image/71d97ed15f2acf4fd6bf5b3e45c74f26d8459e43'
	},
	{
		judul: 'Calm Vibes',
		thumbnail: 'https://i.scdn.co/image/d2ef67cd3838806a7682c23a86ca0327252b6335'
	},
	{
		judul: 'Game On',
		thumbnail: 'https://i.scdn.co/image/a97fd1c15bdb45d7b2a64bcad4ca627649401cb0'
	}

]

export class Home extends Component {
	static navigationOptions = {
		tabBarLabel: null,
		tabBarIcon: () => (
      <Image
        source={require('../public/assets/img/home.png')}
				style={styles.icon}
				resizeMode={'contain'}
      />
    ),																																			
		title: 'Home',
		headerLeft: null,
		headerStyle: { backgroundColor: '#333333', height: 50 },
		headerTitleStyle: { alignSelf: 'center', color: '#FFFFFF', fontSize: 15 }
	}
  
  constructor() {
		super()
			this.state = {
				dataSource: null
			}
	}
	componentWillMount() {
		let user = realm.objects('User')[0]
		let musics = realm.objects('Music')[0]
		let isLogin = this.props.isLogin
		console.log(user, 'HIHI')
		console.log(musics, 'HAHA')
		if(!musics) {
			this.props.getAllMusics()
		}
		if(!isLogin && !user) {
			this.props.navigation.dispatch(redirectLogin)
		} else {
			Axios.get('http://ec2-34-216-118-112.us-west-2.compute.amazonaws.com/musics')
			.then(({data}) => {
				this.setState({
					dataSource: data
				})
			})
			.catch(err => {
				console.log('====================================')
				console.log(err)
				console.log('====================================')
			})
		}
	}

	render() {
		const { navigate } = this.props.navigation
		let content = null
		if(this.state.dataSource) {
			content =
				<FlatList
					horizontal={true}
					data={mood}
					keyExtractor = { (item, i) => i}
					renderItem = { ({item}) =>(
						<TouchableHighlight onPress={ () => navigate('PlaylistDetail', {detail: item})}>
							<View style={{padding: 10}}> 
								<Image
									style={{width: 150, height: 150}}
									source={{uri: item.thumbnail}}
								/>
								<Text style={{ alignSelf: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 15}}>{item.judul}</Text>
							</View>
						</TouchableHighlight>
					)}
				/>
		} else {
			content = <Text style={{ alignSelf: 'center', color: '#FFFFFF' }}>Loading...</Text>
		}
    return (
			<View style={styles.homeStyle}>
				<View style={{ flex: 1 }}>
					<ScrollView>
						<Text style={styles.styleTitle}>Dibuat Untuk Kamu</Text>
						<Text style={{ alignSelf: 'center', color: '#FFFFFF', fontSize: 10 }}>Dapatkan rekomendasi yang lebih baik semakin sering kamu mendengarkan</Text>
						{ content }
						<Text style={styles.styleTitle}>100 % musik bagus</Text>
						{ content }
						<Text style={styles.styleTitle}>Mood</Text>
						{ content }
						<Text style={styles.styleTitle}>Mood</Text>
						{ content }
					</ScrollView>
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
	icon: {
		alignSelf: 'center', 
    height: 30,
	},
	styleTitle: { 
		alignSelf: 'center', 
		color: '#FFFFFF', 
		fontWeight: 'bold', 
		fontSize: 20 
	}
})


function mapStateToProps(state) {
	return {
		isLogin: state.userReducers.isLogin
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getAllMusics: () => dispatch(getAllMusics())
	}
} 

export default connect(mapStateToProps, mapDispatchToProps)(Home)