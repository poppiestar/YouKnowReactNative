
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/main';

export default class PlayerScores extends Component {
    render () {
        const players = this.props.players.map((player, i) => {
            const score = player.scores.reduce((prev, next) => { return prev + next });

            return (
                <Text key={i}>{player.name}: {score}</Text>
            );
        });

        return (
            <View style={ styles.component }>
                <Text style={ styles.heading }>Player Scores</Text>
                {players}
            </View>
        );
    }
}
