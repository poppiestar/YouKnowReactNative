/**
* You Know - React Native Edition
* @flow
*/

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import YouKnow from './src/YouKnow';

class YouKnowReactNative extends Component {
    render() {
        return (
            <YouKnow />
        );
    }
}

AppRegistry.registerComponent('YouKnowReactNative', () => YouKnowReactNative);
