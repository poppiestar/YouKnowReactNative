
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/main';

export default class PlayerList extends Component {
    render () {
        let players;

        if (this.props.players.length > 0) {
            players = this.props.players.map((player, i) => {
               return (
                   <Text style={ styles.playerListItem } key={i}>{player.name}</Text>
               );
           });
       } else {
           players = <Text style={ styles.playerListItem }>No players entered yet.</Text>;
       }

        return (
            <View style={ [styles.component, styles.playerList] }>
                {players}
            </View>
        );
    }
}
