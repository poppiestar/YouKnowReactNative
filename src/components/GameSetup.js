
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';

import styles from '../styles/main';

import SetGoal from './GameSetup/SetGoal';
import EnterPlayers from './GameSetup/EnterPlayers';

export default class GameSetup extends Component {
    constructor (props) {
        super(props);
    }

    validateSetup () {
        console.log('validating setup');
        return false;
    }

    render () {
        return (
            <View style={ styles.page }>
                <Text style={ styles.heading }>Game Setup</Text>
                <GameSetup.SetGoal goal={this.props.goal} updateGoal={this.props.updateGoal} />
                <GameSetup.EnterPlayers addPlayer={this.props.addPlayer} removePlayer={this.props.removePlayer} players={this.props.players} />
                <Button
                    containerStyle={{padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'blue' }}
                    style={{fontSize: 20, color: 'white'}}
                    onPress={ this.validateSetup.bind(this) }>
                    Start Game
                </Button>
            </View>
        );
    }
}

GameSetup.SetGoal = SetGoal;
GameSetup.EnterPlayers = EnterPlayers;
