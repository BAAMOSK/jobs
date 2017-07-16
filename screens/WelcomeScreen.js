import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../src/components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to this awesome app!' },
  { text: 'Set your location then swipe aweem away' }
];

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Slides data={SLIDE_DATA} />
      </View>
    );
  }
}

export default WelcomeScreen;