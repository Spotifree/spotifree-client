import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, Image, FlatList, TouchableOpacity } from 'react-native';
import Menu from './Menu'
import SearchBar from 'react-native-material-design-searchbar'
import realm from '../realm'
import RealmQuery from 'realm-query'

export default class Search extends Component {
	constructor() {
		super()
		this.state = {
			results: [],
			authorResults: []
		}
	}
	
	static navigationOptions = {
		header: null,
		tabBarLabel: null,
		tabBarIcon: () => (
			<Image
				source={require('../public/assets/img/search.png')}
				style={styles.icon}
				resizeMode={'contain'}
			/>
		)
	}
	
	searchHandle(input) {
		if(!input) {
			this.setState({
				results: []
			})
		} else {
			let query = RealmQuery.create().contains('title', input, true)
			let results = realm.objects('Music').filtered(query.toString())
			this.setState({
				results: results,
			})
		}
	}
	
	render() {
    return (
			<View style={styles.homeStyle}>
				<View style={{height: 50}}>
					<SearchBar
						inputStyle={{ backgroundColor: '#535353', justifyContent: 'center', borderWidth: 0, alignItems: 'center',}}
						onSearchChange={(input) => this.searchHandle(input)}
						height={50}
						onFocus={() => console.log('On Focus')}
						onBlur={() => console.log('On Blur')}
						placeholder={'Cari...'}
						autoCorrect={false}
						padding={0}
						returnKeyType={'search'}
						textStyle={{color: '#FFFFFF'}}
					/>
				</View>
				{
					this.state.results.length !== 0 || this.state.authorResults.length !== 0 ?
					<View style={{flex: 1, marginTop: 20}}>
						<Text style={{alignSelf: 'center', color: '#FFFFFF', fontSize: 18, fontWeight: '800',marginBottom: 5}}>Hasil Pencarian</Text>
						<FlatList
							data={this.state.results}
							style={{paddingHorizontal: 40, alignContent: 'center'}}
							renderItem={({item}) => 
								<TouchableOpacity>
									<View style={{flexDirection: 'row', marginVertical: 10, alignItems: 'center'}}>
										<Image source={{uri:item.thumbnail}} resizeMode='contain' style={{width: 50, height: 50, borderRadius: 100}}/>
										<View style={{marginLeft: 10}}>
											<Text style={{color: '#FFFFFF'}}>{item.title}</Text>
											<Text style={{color: '#FFFFFF', fontSize: 10}}>{item.author}</Text>
										</View>
									</View>
								</TouchableOpacity>}
						/>
					</View>
					:
					<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
						<Image source={require('../public/assets/img/searchbig.png')} style={styles.iconMenu}/>
						<Text style={{ alignItems: 'center', alignSelf: 'center', paddingTop: 10, color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 }}>Cari Spotifree</Text>
						<Text style={{ alignItems: 'center', alignSelf: 'center', paddingTop: 10, color: '#FFFFFF', fontSize: 14 }}>Temukan musik dan podcast favoritmu.</Text>
					</View>
				}
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
  }, icon: {
		alignSelf: 'center', 
    height: 30,
  }
})