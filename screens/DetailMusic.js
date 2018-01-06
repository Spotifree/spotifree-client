import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import Axios from 'axios'
import AudioControls from './AudioControls/AudioControls'

export default class App extends Component {
  static navigationOptions = {
		header: null
	}
  constructor() {
    super()
    this.state = {
      playlist: null
    }
  }
  componentDidMount() {
    Axios.get('http://ec2-34-216-118-112.us-west-2.compute.amazonaws.com/musics')
    .then(({ data }) => {
      let getPlaylist = []
      data.forEach(music => {
        let newurl = music.urlMusic.replace(/ /g, '%20')
        let newData = {
          key: music._id,
          title: music.title,
          author: music.artist,
          url: newurl,
          path: '',
          thumbnail: music.urlThumbnail,
          genre: music.genre,
        }
        getPlaylist.push(newData)
      })
      this.setState({
        playlist: getPlaylist
      })
      console.log('====================================')
      console.log(this.state.playlist)
      console.log('====================================')

    })
  }
  render() {
    console.log('====@@@@@@@@@@@@@@@@@@====')
    console.log(this.state.playlist)
    console.log('====================================')
    if(this.state.playlist) {
      console.log('====================================')
      console.log('MASUK')
      console.log('====================================')
      return (
        <View style={styles.container}>
          <AudioControls
            initialTrack={0}
            playlist={this.state.playlist}
  
            activeColor={'#fff'}
            inactiveColor={'#fdfab1'}
  
            hasButtonSkipSeconds
            timeToSkip={30}
          />
        </View>
      )
    } else {
      return (
        <View><Text>Loading...</Text></View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
