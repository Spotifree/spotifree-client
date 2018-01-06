import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Slider,
  Text,
  Dimensions
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'

import images from '../config/images'
import colors from '../config/colors'
import AudioController from '../utils/AudioController'

const { width } = Dimensions.get('window')

export default class AudioControls extends Component {
  static defaultProps = {
    ...Component.defaultProps,

    //SKIP SECONDS
    hasButtonSkipSeconds: false,
    timeToSkip: 15,

    //THUMBNAIL
    thumbnailSize: {
      width: width * 0.6,
      height: width * 0.6
    },

    //SOUND
    titleStyle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.white
    },
    authorStyle: {
      fontSize: 15,
      color: colors.white
    },

    //COLORS
    activeColor: colors.white,
    inactiveColor: colors.grey,

    //BUTTONS
    activeButtonColor: null,
    inactiveButtonColor: null,

    //SLIDER
    sliderMinimumTrackTintColor: null,
    sliderMaximumTrackTintColor: null,
    sliderThumbTintColor: null,
    sliderTimeStyle: {
      fontSize: 18,
      color: colors.white
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      duration: 0,
      currentTime: 0,
      currentAudio: {},
      isReady: true,
      isPlaying: false
    }
  }

  componentWillMount() {
    console.log('=========DI CONTROL=================')
    console.log(this.props)
    console.log('====================================')
    const { playlist, initialTrack } = this.props
    AudioController.init(playlist, initialTrack, this.onChangeStatus, this.updateCurrentTime)
  }

  onChangeStatus = (status) => {
    switch (status) {
      case AudioController.status.PLAYING:
        this.setState({ isPlaying: true })
        break
      case AudioController.status.PAUSED:
        this.setState({ isPlaying: false })
        break
      case AudioController.status.STOPPED:
        this.setState({ isPlaying: false })
        break
      case AudioController.status.LOADED:
        AudioController.getDuration((seconds) => {
          this.setState({ duration: seconds })
        })
        this.setState({ currentAudio: AudioController.currentAudio })
        break
      case AudioController.status.ERROR:
        console.log('Status Error')
        break
      default:
        return
    }
  }

  updateCurrentTime = (seconds) => {
      this.setState({ currentTime: seconds })
  }

  renderPlayerIcon() {
    const { isPlaying } = this.state
    if (isPlaying) {
      return (
        <TouchableOpacity
          onPress={() => AudioController.pause()}
        >
          <Image
            source={images.iconPause}
            style={[
              styles.playButton,
              { tintColor: this.props.activeButtonColor || this.props.activeColor }
            ]}
          />
        </TouchableOpacity >
      )
    }

    return (
      <TouchableOpacity
        onPress={() => AudioController.play()}
      >
        <Image
            source={images.iconPlay}
            style={[
              styles.playButton,
              { tintColor: this.props.activeButtonColor || this.props.activeColor }
            ]}
        />
      </TouchableOpacity >
    )
  }
  render() {
    const { currentTime, duration } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
        </View>
        <View style={styles.detailContainer}>
          <Text style={this.props.titleStyle}>{this.state.currentAudio.title}</Text>
          <Text style={this.props.titleStyle}> . </Text>
          <Text style={this.props.authorStyle}>{this.state.currentAudio.author}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          {this.renderPlayerIcon()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        borderBottomWidth: 1.5,
        borderColor: '#000'
    },
    detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginVertical: 10,
        marginRight:10,
        marginLeft:10,
        width: '70%',
    },
    playbackContainer: {
        flexDirection: 'row'
    },
    buttonsContainer: {
        alignSelf:'center',
        justifyContent: 'flex-end'
    },
    playbackBar: {
        width: '100%'
    },
    playButton: {
        width: 40,
        height: 40
    },
    controlButton: {
      width: 20,
      height: 20,
      marginLeft: 40,
      marginRight: 40,
    }
})
