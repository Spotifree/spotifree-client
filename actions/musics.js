import Axios from 'axios'
import realm from '../realm'

export function getAllMusics() {
  return dispatch => {
    Axios.get('http://ec2-34-216-118-112.us-west-2.compute.amazonaws.com/musics')
    .then(({ data }) => {
      let getPlaylist = []
      data.forEach(music => {
        let newurl = music.urlMusic.replace(/ /g, '%20')
        realm.write(() => {
          realm.create('Music', {
            key: music._id,
            title: music.title,
            author: music.artist,
            url: newurl,
            path: '',
            thumbnail: music.urlThumbnail,
            genre: music.genre,
          })
        })
      })
    })
  }
}