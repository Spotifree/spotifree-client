import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Welcome extends Component {
	static navigationOptions = {
		headerLeft: null,
		headerStyle: { height: 24, backgroundColor: '#333333' },
  }
	
	render() {
    return (
			<View style={styles.container}>
        <Image source={require('../public/assets/img/logo.png')} style={{alignSelf: 'center', width: 250, marginTop: 70}} resizeMode={'contain'}/>
        <View style={{ marginTop: 140 }}>
          <Text style={{ alignSelf: 'center', fontSize: 18, color: '#FFFFFF', fontWeight: '800' }}>Putar Lagu dari Artis favoritmu</Text>
          <TouchableOpacity style={{ marginTop: 30, backgroundColor: '#09bb06', height: 50, borderRadius: 100, justifyContent: 'center'}}>
            <Text style={{ alignSelf: 'center', color: '#FFFFFF', fontWeight: '800' }}>DAFTAR GRATIS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 15, backgroundColor: '#365899', height: 50, borderRadius: 100, justifyContent: 'center'}}>
            <Text style={{ alignSelf: 'center', color: '#FFFFFF', fontWeight: '800' }}>LANJUTKAN DENGAN FACEBOOK</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ alignSelf: 'center', fontSize: 15, color: '#FFFFFF' }}>Sudah menjadi pengguna?</Text>
          <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#FFFFFF', height: 50, borderRadius: 100, justifyContent: 'center'}}>
            <Text style={{ alignSelf: 'center', fontWeight: '800' }}>MASUK</Text>
          </TouchableOpacity>
        </View>
			</View>
		)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#21c2ff',
    paddingHorizontal: 40
  },
})