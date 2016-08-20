
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/main';

export default class GameRound extends Component {
    render () {
        return (
            <View style={ styles.component }>
                <Text>GameRound component</Text>
            </View>
        );
    }
}
