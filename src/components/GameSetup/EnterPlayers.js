
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import PlayerList from './PlayerList';
import NewPlayer from './NewPlayer';

import styles from '../../styles/main';

export default class EnterPlayers extends Component {
    render () {
        return (
            <View>
                <Text style={ styles.subheading }>Enter Players</Text>
                <EnterPlayers.NewPlayer addPlayer={this.props.addPlayer} />
                <EnterPlayers.PlayerList removePlayer={this.props.removePlayer} players={this.props.players} />
            </View>
        );
    }
}

EnterPlayers.NewPlayer = NewPlayer;
EnterPlayers.PlayerList = PlayerList;
