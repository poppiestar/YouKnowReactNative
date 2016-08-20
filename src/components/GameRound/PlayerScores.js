
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/main';

export default class PlayerScores extends Component {
    render () {
        const players = this.props.players.map((player, i) => {
            const score = player.scores.reduce((prev, next) => { return prev + next });

            return (
                <View key={i} style={ styles.playerScore }>
                    <Text style={ styles.playerScoreName }>{player.name}</Text>
                    <Text style={ styles.playerScoreValue }>{score}</Text>
                </View>
            );
        });

        return (
            <View style={ styles.component }>
                {players}
            </View>
        );
    }
}
