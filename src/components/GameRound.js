
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Button from 'react-native-button';

import styles from '../styles/main';

import PlayerScores from './GameRound/PlayerScores';
import WinnerSelector from './GameRound/WinnerSelector';

export default class GameRound extends Component {
    constructor (props) {
        super(props);

        this.state = {
            winner: -1
        };
    }

    validate () {
        if (this.state.winner >= 0) {
            this.props.selectWinner(this.state.winner);
            this.props.continue();
        } else {
            Alert.alert('Who won?', 'You need to select the winner of this round', [
                { text: 'OK' }
            ]);
        }
    }

    selectWinner (id) {
        this.setState({
            winner: id
        });
    }

    render () {
        return (
            <View style={ styles.page }>
                <Text style={ styles.heading }>Player Scores</Text>
                <Text style={ styles.goal }>Goal for this game: { this.props.goal }</Text>
                <GameRound.PlayerScores
                    players={ this.props.players }
                />
                <GameRound.WinnerSelector
                    players={ this.props.players }
                    selectWinner={ this.selectWinner.bind(this) }
                    winner={ this.state.winner }
                />
                <Button
                    containerStyle={ styles.buttonContainer }
                    style={ styles.buttonText }
                    onPress={ this.validate.bind(this) }>
                    Round Over
                </Button>
            </View>
        );
    }
}

GameRound.PlayerScores = PlayerScores;
GameRound.WinnerSelector = WinnerSelector;
