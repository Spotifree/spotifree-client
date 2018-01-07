import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Axios from 'axios'
import AudioControls from './AudioControls/MiniAudioControls'

// const resetHome = NavigationActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'Home'}),
//   ]
// })

// const resetBrowse = NavigationActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'Browse'}),
//   ]
// })

// const resetSearch = NavigationActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'Search'}),
//   ]
// })

// const resetCollection = NavigationActions.reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'Collection'}),
//   ]
// })


export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      playlist: null
    };
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
    const { navigate } = this.props.navigation
    let listMusic = null
    if(this.state.playlist) {
      console.log('====================================')
      console.log('MASUK')
      console.log('====================================')
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
            {listMusic}
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