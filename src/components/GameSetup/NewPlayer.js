
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
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
        console.log('validating name');
        return false;
    }

    render () {
        return (
            <View style={ styles.container }>
                <TextInput
                    style={ styles.input }
                    placeholder="Name"
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
