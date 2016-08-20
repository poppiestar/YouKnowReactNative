
import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

import styles from '../../styles/main';

export default class WinnerSelector extends Component {
    render () {
        return (
            <View style={ styles.component }>
                <Picker
                    selectedValue={ this.props.winner }
                    onValueChange={ (id) => { this.props.selectWinner(id) }}>
                    <Picker.Item value="-1" label="Who won?" />
                    {
                        this.props.players.map((player, i) => {
                            return (
                                <Picker.Item key={i} value={i} label={ player.name } />
                            );
                        })
                    }
                </Picker>
            </View>
        );
    }
}
