
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/main';

export default class PlayerScores extends Component {
    render () {
        return (
            <View style={ styles.component }>
                <Text>PlayerScores component</Text>
            </View>
        );
    }
}
