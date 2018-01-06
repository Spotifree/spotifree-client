import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, ScrollView, FlatList, Image, ImageBackground } from 'react-native';
import Menu from './Menu'
import GridView from 'react-native-super-grid'
import { Icon } from '@shoutem/ui'

const mood = [
	{
		judul: 'Pop',
		thumbnail: 'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg'
	},
	{
		judul: 'Pop Indo',
		thumbnail: 'https://t.scdn.co/media/categories/popindo_274x274.jpg'
	},
	{
		judul: 'Mood',
		thumbnail: 'https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg'
	},
	{
		judul: 'Chill',
		thumbnail: 'https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg'
	},
	{
		judul: 'Electronic Dance',
		thumbnail: 'https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg'
	},
	{
		judul: 'Terbaik',
		thumbnail: 'https://t.scdn.co/images/e00308fb3b644b9087dba346d0c8a880.jpeg'
	},
	{
		judul: 'Asmara',
		thumbnail: 'https://t.scdn.co/media/derived/romance-274x274_8100794c94847b6d27858bed6fa4d91b_0_0_274_274.jpg'
	},
	{
		judul: 'Pesta',
		thumbnail: 'https://t.scdn.co/media/links/partyicon_274x274.jpg'
	},
	{
		judul: 'Fokus',
		thumbnail: 'https://t.scdn.co/media/original/genre-images-square-274x274_5e50d72b846a198fcd2ca9b3aef5f0c8_274x274.jpg'
	},
	{
		judul: 'Tidur',
		thumbnail: 'https://t.scdn.co/media/derived/sleep-274x274_0d4f836af8fab7bf31526968073e671c_0_0_274_274.jpg'
	}

]
export default class Browse extends Component {
	static navigationOptions = {
		title: 'Browse',
		headerLeft: null,
		headerStyle: { backgroundColor: '#333333', height: 50 },
		headerTitleStyle: { alignSelf: 'center', color: '#FFFFFF', fontSize: 15 }
  }
	
	render() {
    return (
			<View style={styles.homeStyle}>
				<View style={{ flex: 1 }}>
					<ScrollView>
						<Text style={{ alignItems: 'center', alignSelf: 'center', paddingLeft: 18, paddingTop: 10, color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}>Playlist seru Spotifree siap memeriahkan hari Sabtu kamu</Text>
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
						<Text style={{ color: '#FFFFFF', fontWeight: 'bold', paddingBottom: 20 }}> </Text>
						<Text style={styles.list}><Icon style={{color:'#fff'}} name='equalizer' />  Tangga Lagu</Text>
						<Text style={styles.list}><Icon style={{color:'#fff'}} name='rsvp' />  Rilis Baru</Text>
						<Text style={styles.list}><Icon style={{color:'#fff'}} name='rss-feed' />  Podcast</Text>
						<Text style={styles.list}><Icon style={{color:'#fff'}} name='search' />  Temukan</Text>
						<Text style={styles.list}><Icon style={{color:'#fff'}} name='receipt' />  Konser</Text>
						<GridView
							itemDimension={150}
							items={mood}
							style={styles.gridView}
							renderItem={item => (
								<View style={styles.itemContainer}>
									<ImageBackground 
										source={{uri: item.thumbnail}}
										style={{
											flex: 1,
											width: undefined,
											height: undefined,
											backgroundColor:'transparent',
											justifyContent: 'center',
											alignItems: 'center',}}
										>
										<Text style={styles.itemName}>{item.judul}</Text>
									</ImageBackground>
								</View>
							)}
						/>
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
	gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
		fontSize: 15,
		paddingTop: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
	},
	list: {
		color: '#FFFFFF',
		paddingBottom: 15 ,
		paddingLeft: 20,
		fontSize: 15,
		fontWeight: 'bold'
	}
})