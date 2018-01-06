import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { signup } from '../actions/users'

const redirectLogin = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login'}),
  ]
})

class Signup2 extends Component {
	static navigationOptions = {
		header: null,
  }

  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
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
    this.props.signup2({
      email: this.props.userData.email,
      username: this.props.userData.username,
      password: this.props.userData.password,
      first_name: this.state.firstname,
      last_name: this.state.lastname
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.userCreated) {
      this.props.navigation.dispatch(redirectLogin)
    }
  }
  
	render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
			<ScrollView style={styles.container}>
        <Text style={{alignSelf: 'center', fontSize: 35, fontWeight: '600', color: '#FFFFFF', marginTop: 70}}>Buat akun</Text>
        <Text style={{ marginTop: 20, fontWeight: '800', fontSize: 15, color: '#FFFFFF' }}>Nama depanmu?</Text>
        <TextInput
          style={{ fontSize: 20, paddingHorizontal: 10, height: 50, backgroundColor: this.state.backgroundColor1, borderRadius: 3, marginTop: 3 }}
          underlineColorAndroid='transparent'
          keyboardType='email-address'
          onFocus={() => this.onFocus('1')}
          onBlur={() => this.onBlur('1')}
          onChangeText={(firstname) => this.setState({firstname})}
        />
        <Text style={{ fontWeight: '800', fontSize: 15, color: '#FFFFFF', marginTop: 20 }}>Nama belakangmu?</Text>
        <TextInput
          style={{ fontSize: 20, paddingHorizontal: 10, height: 50, backgroundColor: this.state.backgroundColor2, borderRadius: 3, marginTop: 3 }}
          underlineColorAndroid='transparent'
          onFocus={() => this.onFocus('2')}
          onBlur={() => this.onBlur('2')}
          onChangeText={(lastname) => this.setState({lastname})}
        />
        <TouchableOpacity style={ styles.button } onPress={() => this.submitHandle()}>
          <Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: '600', color: '#FFFFFF' }}>SELESAI</Text>
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
    backgroundColor: '#b200ff',
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

function mapStateToProps(state) {
  return {
    userData: state.userReducers.signup,
    userCreated: state.userReducers.userCreated    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signup2: (input) => dispatch(signup(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup2)