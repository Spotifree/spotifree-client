import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';

export default class Welcome extends Component {
	static navigationOptions = {
		headerLeft: null,
		headerStyle: { height: 24, backgroundColor: '#333333' },
  }

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      backgroundColor1: '#E6E6E6',
      backgroundColor2: '#E6E6E6',
    }
  }

  onFocus(input) {
    this.setState({
      ['backgroundColor'+input]: '#FFFFFF'
    })
  }

  onBlur(input) {
    this.setState({
      ['backgroundColor'+input]: '#E6E6E6'
    })
  }

  submitHandle() {
    console.log(this.state)
  }
	
	render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
			<ScrollView style={styles.container}>
        <Text style={{alignSelf: 'center', fontSize: 35, fontWeight: '600', color: '#FFFFFF', marginTop: 70}}>Masuk</Text>
        <Text style={{ marginTop: 20, fontWeight: '800', fontSize: 15, color: '#FFFFFF' }}>Nama pengguna</Text>
        <TextInput
          style={{ fontSize: 20, paddingHorizontal: 10, height: 50, backgroundColor: this.state.backgroundColor1, borderRadius: 3, marginTop: 3 }}
          underlineColorAndroid='transparent'
          keyboardType='email-address'
          onFocus={() => this.onFocus('1')}
          onBlur={() => this.onBlur('1')}
          onChangeText={(username) => this.setState({username})}
        />
        <Text style={{ fontWeight: '800', fontSize: 15, color: '#FFFFFF', marginTop: 20 }}>Kata sandi</Text>
        <TextInput
          style={{ fontSize: 20, paddingHorizontal: 10, height: 50, backgroundColor: this.state.backgroundColor2, borderRadius: 3, marginTop: 3 }}
          underlineColorAndroid='transparent'
          secureTextEntry={true}
          onFocus={() => this.onFocus('2')}
          onBlur={() => this.onBlur('2')}
          onChangeText={(password) => this.setState({password})}
        />
        <TouchableOpacity style={ styles.button } onPress={() => this.submitHandle()}>
          <Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: '600', color: '#FFFFFF' }}>MASUK</Text>
        </TouchableOpacity>
			</ScrollView>
      </KeyboardAvoidingView>
		)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#6d18ff',
    paddingHorizontal: 20
  },
  button: { 
    alignSelf: 'center', 
    marginTop: 25, 
    width: 200, 
    backgroundColor: '#B3B3B3', 
    height: 50, 
    borderRadius: 100, 
    justifyContent: 'center'
  }
})