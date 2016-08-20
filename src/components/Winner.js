
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Button from 'react-native-button';

import styles from '../styles/main';

export default class Winner extends Component {
    render () {
        const winner = this.props.players[this.props.winner];
        const score = winner.scores.reduce( (prev, curr) => prev + curr );

        return (
            <View style={ styles.page }>
                <Text style={ styles.heading }>Winner!</Text>
                <Text>Congratulations!</Text>
                <Text style={ styles.winner }>{winner.name}</Text>
                <Text>has won the game with {score} points!</Text>
                <Button onPress={ this.props.restartGame }>Play Again</Button>
                <Button onPress={ this.props.resetGame }>New Players</Button>
            </View>
        );
    }
}
