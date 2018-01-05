import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
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
}, {
  initialRouteName: 'Home'
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
