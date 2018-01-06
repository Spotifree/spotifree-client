import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, Button, TouchableHighlight, Content, List, ScrollView, ListView, Row, FlatList } from 'react-native';
import Menu from './Menu'
import Axios from 'axios'

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
export default class Home extends Component {
	static navigationOptions = {
		title: 'Home',
		headerLeft: null,
		headerStyle: { paddingTop: 24, backgroundColor: '#333333', height: 80 },
		headerTitleStyle: { alignSelf: 'center', color: '#FFFFFF', fontSize: 15 }
	}
	constructor() {
		super()
			this.state = {
				dataSource: null
			}
	}
	componentWillMount() {
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
	render() {
		let content = null
		if(this.state.dataSource) {

		console.log('====================================')
		console.log(
			this.state.dataSource
		)
		console.log('====================================')
			content =
				<FlatList
					horizontal={true}
					data={mood}
					keyExtractor = { (item, i) => i}
					renderItem = { ({item}) =>(
						<View style={{padding: 10}}> 
							<Image
								style={{width: 150, height: 150}}
								source={{uri: item.thumbnail}}
							/>
							<Text style={{ alignSelf: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 15}}>{item.judul}</Text>
						</View>
					)}
				/>
		} else {
			content = <Text style={{ alignSelf: 'center', color: '#FFFFFF' }}>Loading...</Text>
		}
    return (
			<View style={styles.homeStyle}>
				<View style={{ flex: 1 }}>
					<ScrollView>
						<Text style={{ alignSelf: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}>Dibuat Untuk Kamu</Text>
						<Text style={{ alignSelf: 'center', color: '#FFFFFF', fontSize: 10 }}>Dapatkan rekomendasi yang lebih baik semakin sering kamu mendengarkan</Text>
						{ content }
						<Text style={{ alignSelf: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}>100 % musik bagus</Text>
						{ content }
						<Text style={{ alignSelf: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}>Mood</Text>
						{ content }
						<Text style={{ alignSelf: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}>Mood</Text>
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
	}
})