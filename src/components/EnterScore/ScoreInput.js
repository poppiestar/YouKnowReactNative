
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Button from 'react-native-button';

import styles from '../../styles/main';

export default class ScoreInput extends Component {
    constructor (props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment () {
        this.props.increment(this.props.value);
        this.setState({ count: this.state.count + 1 });
    }

    decrement () {
        if (this.state.count > 0) {
            this.props.decrement(this.props.value);
            this.setState({ count: this.state.count - 1});
        }
    }

    render () {
        return (
            <View style={ styles.scoreInput }>
                <Text>{this.props.name}</Text>
                <Button onPress={this.decrement.bind(this)}>-</Button>
                <Text>{this.state.count}</Text>
                <Button onPress={this.increment.bind(this)}>+</Button>
            </View>
        );
    }
}
