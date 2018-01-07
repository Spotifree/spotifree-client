import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
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
		header: null																														
	}
	
	render() {
    return (
			<View style={styles.homeStyle}>
				<View style={{flexDirection: 'row', backgroundColor: '#333333', height: 50, paddingLeft: 20}}>
					<TouchableOpacity style={{marginRight: 100}} onPress={() => this.props.navigation.navigate('DetailAccount')}>
						<Image source={require('../public/assets/img/user.png')} resizeMode='contain' style={{height: 50}} />
					</TouchableOpacity>
					<Text style={{ alignSelf: 'center', fontWeight: '800', color: '#FFFFFF', fontSize: 15 }}>Koleksi Kamu</Text>
				</View>
				<ScrollView>
					<View style={styles.contentTop}>
						<TouchableOpacity style={styles.option}>
							<Image source={require('../public/assets/img/playlist.png')} resizeMode='contain' style={{height: 20, width: 50}}/>
							<Text style={{color: '#FFFFFF'}}>Playlist</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.option}>
							<Image source={require('../public/assets/img/lagu.png')} resizeMode='contain' style={{height: 20, width: 50}}/>
							<Text style={{color: '#FFFFFF'}}>Lagu</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.option}>
							<Image source={require('../public/assets/img/album.png')} resizeMode='contain' style={{height: 20, width: 50}}/>
							<Text style={{color: '#FFFFFF'}}>Album</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.option}>
							<Image source={require('../public/assets/img/artis.png')} resizeMode='contain' style={{height: 20, width: 50}}/>
							<Text style={{color: '#FFFFFF'}}>Artis</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.contentBottom}>
						<Text style={{marginTop: 10, alignSelf: 'center', color: '#FFFFFF', fontWeight: '800', fontSize: 15 }}>Baru Diputar</Text>
					</View>
				</ScrollView>
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
	contentTop: {
		flex: 1,
		paddingTop: 15,
		paddingHorizontal: 10
	},
	contentBottom: {
		height: 130,
		marginTop: 50
	},
	icon: {
		alignSelf: 'center', 
    height: 30,
	},
	option: { 
		marginVertical: 10,
		flexDirection: 'row'
	}
})