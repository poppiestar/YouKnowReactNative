
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import Button from 'react-native-button';

import styles from '../styles/main';

import PlayerScores from './GameRound/PlayerScores';
import WinnerSelector from './GameRound/WinnerSelector';

export default class GameRound extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    validate () {
        if (!this.state.winner) {
            Alert.alert('Who won?', 'You need to select the winner of this round', [
                { text: 'OK' }
            ]);
        } else {
            this.props.continue(parseInt(this.state.winner, 10));
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
                <GameRound.PlayerScores
                    players={this.props.players}
                />
                <GameRound.WinnerSelector
                    players={this.props.players}
                    selectWinner={this.selectWinner.bind(this)}
                />
                <Button
                    containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'blue' }}
                    style={{fontSize: 20, color: 'white'}}
                    onPress={ this.validate.bind(this) }>
                    Enter Score
                </Button>
            </View>
        );
    }
}

GameRound.PlayerScores = PlayerScores;
GameRound.WinnerSelector = WinnerSelector;
