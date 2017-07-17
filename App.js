import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';


export default class App extends React.Component {
  render() {
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
            }, { tabBarPosition: 'bottom' })
          }
        }, {
          tabBarPosition: 'bottom',
          swipeEnabled: false,
          tabBarOptions: { labelStyle: { fontSize: 13 } }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true,
      animationEnabled: false
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}