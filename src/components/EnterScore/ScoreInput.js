
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
                <Text style={ { flex: 2 } }>{this.props.name}</Text>
                <View style={ { flex: 1, flexDirection: 'row', height: 25, justifyContent: 'space-between' } }>
                    <Button
                        style={ { fontSize: 30 }}
                        onPress={this.decrement.bind(this)}>
                        -
                    </Button>
                    <Text style={ { fontSize: 20 }}>{this.state.count}</Text>
                    <Button
                        style={ { fontSize: 30 }}
                        onPress={this.increment.bind(this)}>
                        +
                    </Button>
                </View>
            </View>
        );
    }
}
