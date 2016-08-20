
import React, { Component } from 'react';
import { View, TextInput, Alert } from 'react-native';
import Button from 'react-native-button';

import styles from '../../styles/AddPlayer';

export default class NewPlayer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    validateName () {
        if (this.state.name === '') {
            Alert.alert('Who are you?', 'You need to enter a name', [
                { text: 'OK' }
            ]);
        } else {
            this.props.addPlayer(this.state.name);
            this.setState({ name: '' });
        }
    }

    render () {
        return (
            <View style={ styles.container }>
                <TextInput
                    style={ styles.input }
                    placeholder="Name"
                    value={this.state.name}
                    onChangeText={(text) => { this.setState({ name: text })}}
                />
                <Button
                    style={ styles.button }
                    onPress={ this.validateName.bind(this) }>
                    Add
                </Button>
            </View>
        );
    }
}
