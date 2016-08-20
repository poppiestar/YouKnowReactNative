
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PlayerList extends Component {
    render () {
        let players;

        if (this.props.players.length > 0) {
            players = this.props.players.map((player) => {
               return (
                   <Text>{player.name}</Text>
               );
           });
       } else {
           players = <Text>No players entered yet.</Text>;
       }

        return (
            <View>
                {players}
            </View>
        );
    }
}
