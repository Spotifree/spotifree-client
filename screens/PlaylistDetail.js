import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import  realm from '../realm'
import {
  Parallax,
  HeroHeader,
  FadeOut,
  FadeIn,
  ScrollDriver,
} from '@shoutem/animation';

import {
  Image,
  Tile,
  Title,
  Text,
  Subtitle,
  View, 
  Spinner
} from '@shoutem/ui';

export default class PlaylistDetail extends Component {
  static navigationOptions = {																																	
		title: 'Detail',
		headerLeft: null,
		headerStyle: { backgroundColor: '#333333', height: 50 },
		headerTitleStyle: { alignSelf: 'center', color: '#FFFFFF', fontSize: 15 }
  }
  constructor() {
    super()
    this.state = {
      playlist : null
    }
  }
  componentWillMount() {
    let detail = this.props.navigation.state.params.detail
    let genre = null
    if(detail.judul === 'Semangat Pagi') {
      genre = 'pop'
    } else if (detail.judul === 'Mager Parah') {
      genre = 'rock'
    } else if (detail.judul === 'Kopikustik') {
      genre = 'rock'
    } else if (detail.judul === 'Santai Sejenak') {
      genre = 'pop'
    } else if (detail.judul === 'Yang Penting Happy') {
      genre = 'hip hop'
    } else if (detail.judul === 'Calm Vibes') {
      genre = 'pop'
    } else if (detail.judul === 'Game On') {
      genre = 'remix'
    }else {
      genre = null
    }
    let playlist = realm.objects('Music').filtered('genre = "' + genre + '"')
    this.setState({
      playlist: playlist
    })
    console.log('====================================')
    console.log(playlist)
    console.log('====================================')
  }
  render() {
    let detail = this.props.navigation.state.params.detail
    const driver = new ScrollDriver();
    let result = null
    if(this.state.playlist) {
      result = <FlatList
      data={this.state.playlist}
      keyExtractor = { (item, i) => i}
      renderItem = { ({item}) =>(
        <TouchableHighlight>
          <View style={{padding: 10, flexDirection: 'row'}}>
            <Image
              style={{width: 150, height: 150}}
              source={{uri: item.thumbnail}}
            />
            <Text style={{ alignSelf: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 15}}>{item.judul}</Text>
          </View>
        </TouchableHighlight>
      )}
    />
    } else {
      result = <Spinner />
    }
    return (
      <ScrollView style={{paddingTop: 5, backgroundColor: '#000'}} {...driver.scrollViewProps}>
        <HeroHeader driver={driver}>
          <Image
            styleName="large-banner"
            source={{ uri: detail.thumbnail }}
            key={detail.judul}
          >
            <Tile>
              <Parallax driver={driver} scrollSpeed={1.2} header>
                <FadeIn inputRange={[-20, 0]} driver={driver}>
                  <FadeOut inputRange={[100, 150]} driver={driver}>
                    <Title>{detail.judul}</Title>
                    <Subtitle>{} playlist</Subtitle>
                  </FadeOut>
                </FadeIn>
              </Parallax>
            </Tile>
          </Image>
        </HeroHeader>
        <View
          styleName="content"
          style={{
            backgroundColor: 'white',
            height: 700,
            padding: 15,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
          >
            <Text style={{ color: 'white', fontSize: 20 }}> Play </Text>
          </TouchableOpacity>
          {result}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#45cf76',
    padding: 10,
    width: '50%',
    alignSelf: 'center',
		fontWeight: 'bold', 
    fontSize: 20 ,
    borderRadius: 5,
    marginBottom: 20
  }
})