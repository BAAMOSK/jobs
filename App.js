import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';


export default class App extends React.Component {
  render() {
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
            review: { screen: ReviewScreen },
            settings: { screen: SettingsScreen}
            })
          }
        })
      }
    });

    return (
        <MainNavigator />
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  tabBar: {
    tabBarPosition: 'bottom'
  }
};