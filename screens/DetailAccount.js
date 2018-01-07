import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import Menu from './Menu'
import realm from '../realm'

export default class DetailAccount extends Component {
	static navigationOptions = {
		header: null
  }
  
  componentWillMount() {
    console.log(this.props.navigation)
  }
	
	render() {
    let user = realm.objects('User')[0]
    let fullname = user.first_name+' '+user.last_name
    let email = user.email
    return (
			<View style={styles.homeStyle}>
        <View style={{flexDirection: 'row', height: 50, paddingLeft: 20}}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../public/assets/img/back.png')} resizeMode='contain' style={{height: 50}} />
          </TouchableOpacity>
				</View>
				<ScrollView style={{paddingHorizontal: 20}}>
          <Image source={require('../public/assets/img/userThumbnail.png')} style={{alignSelf: 'center', marginTop: 20}}/>
          <Text style={{alignSelf: 'center', color: '#FFFFFF', fontSize: 22, marginTop: 10, fontWeight: '900'}}>{fullname}</Text>
          <Text style={{alignSelf: 'center', color: '#FFFFFF', marginTop: 10}}>{email}</Text>
          <View style={{marginTop: 20}}>
            <Text style={{alignSelf: 'center', color: '#FFFFFF', fontSize: 9}}>0</Text>
            <Text style={{alignSelf: 'center', color: '#FFFFFF', fontSize: 9}}>PLAYLIST</Text>
            <Text style={{alignSelf: 'center', color: '#FFFFFF', fontWeight: '800', fontSize: 18, marginTop: 40}}>Playlist Publik</Text>
            <Text></Text>
            <TouchableOpacity>
              <Text style={{color: '#FFFFFF', fontSize: 12}}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
				</ScrollView>
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