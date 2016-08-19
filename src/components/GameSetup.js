
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/main';

import SetGoal from './GameSetup/SetGoal';
import EnterPlayers from './GameSetup/EnterPlayers';

export default class GameSetup extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View style={ styles.page }>
                <Text style={ styles.heading }>Player Entry</Text>
                <GameSetup.SetGoal goal={this.props.goal} updateGoal={this.props.updateGoal} />
                <GameSetup.EnterPlayers addPlayer={this.props.addPlayer} removePlayer={this.props.removePlayer} players={this.props.players} />
            </View>
        );
    }
}

GameSetup.SetGoal = SetGoal;
GameSetup.EnterPlayers = EnterPlayers;
