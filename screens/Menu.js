import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Axios from 'axios'
import realm from '../realm'
import AudioControls from './AudioControls/MiniAudioControls'

export default class Music extends Component {
  constructor() {
    super();
    this.state = {
      playlist: null
    };
  }
  componentDidMount() {
    let musics = realm.objects('Music')
    this.setState({
      playlist: musics
    })
  }
  render() { 
    const { navigate } = this.props.navigation
    let listMusic = null
    if(this.state.playlist) {
      listMusic = 
        <AudioControls
          initialTrack={0}
          playlist={this.state.playlist}

          activeColor={'#fff'}
          inactiveColor={'#fdfab1'}

          hasButtonSkipSeconds
          timeToSkip={30}
        />
    } else {
      return (
        listMusic = <Text>Loading...</Text>
      )
    }
    return (
      <View>
        <View style={ styles.menuBar }>
          <TouchableOpacity onPress={() => navigate('DetailMusic')}>
            { listMusic }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	menuBar: { 
		flexDirection: 'row', 
    backgroundColor: '#333333',
    height: 60,

    borderBottomWidth: 1.5,
	},
	menuButton: { 
    flex: 1,
		// flexGrow: 1,  
		justifyContent: 'center', 
  },
  iconMenu: {
    alignSelf: 'center', 
    height: 30
  }
})