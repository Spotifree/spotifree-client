import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './store'
import HomeScreen from './screens/Home'
import BrowseScreen from './screens/Browse'
import SearchScreen from './screens/Search'
import CollectionScreen from './screens/Collection'
import WelcomeScreen from './screens/Welcome'
import Signup1Screen from './screens/Signup1'
import Signup2Screen from './screens/Signup2'
import LoginScreen from './screens/Login'
import DetailMusicScreen from './screens/DetailMusic'
import Menu from './screens/Menu'
import DerailAccountScreen from './screens/DetailAccount'

const Menus = TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Browse: {
    screen: BrowseScreen
  },
  Search: {
    screen: SearchScreen
  },
  Collection: {
    screen: CollectionScreen
  }
},{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    renderIndicator: () => null,
    drawerLabel: () => null,
    showIcon: true,
    showLabel: false,
    activeTintColor: '#fff',
    style: {
      backgroundColor: '#333333',
      height: 60,
      padding: 0,
      margin: 0
    },
    iconStyle: {
      height: 30,
      width: '100%'
    },
    tabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    labelStyle: {
      margin:0
    }
  }  
},{
  initialRouteName: 'Home'
},{ lazy: true })
const AppNavigator = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Signup1: {
    screen: Signup1Screen
  },
  Signup2: {
    screen: Signup2Screen
  },
  Welcome: {
    screen: WelcomeScreen
  },
  Home: {
    screen: Menus
  },
  Browse: {
    screen: BrowseScreen
  },
  Search: {
    screen: SearchScreen
  },
  Collection: {
    screen: CollectionScreen
  },
  DetailMusic: {
    screen: DetailMusicScreen
  },
  DetailAccount: {
    screen: DerailAccountScreen
  }
}, {
  initialRouteName: 'Home'
})

export default class App extends React.Component {
  
  render() {
    console.log('====================================')
    console.log('INI DI APP',AppNavigator.router)
    console.log('====================================')
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

SetDefaultFontFamily = () => {
  let components = [Text, TextInput]

  const customProps = {
      style: {
          fontFamily: "Proxima Nova"
      }
  }

  for(let i = 0; i < components.length; i++) {
      const TextRender = components[i].prototype.render;
      const initialDefaultProps = components[i].prototype.constructor.defaultProps;
      components[i].prototype.constructor.defaultProps = {
          ...initialDefaultProps,
          ...customProps,
      }
      components[i].prototype.render = function render() {
          let oldProps = this.props;
          this.props = { ...this.props, style: [customProps.style, this.props.style] };
          try {
              return TextRender.apply(this, arguments);
          } finally {
              this.props = oldProps;
          }
      };
  }
}