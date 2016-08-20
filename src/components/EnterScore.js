
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Button from 'react-native-button';

import ScoreInput from './EnterScore/ScoreInput';

import styles from '../styles/main';

const CARDS = [
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
    { value: 4, name: "4" },
    { value: 5, name: "5" },
    { value: 6, name: "6" },
    { value: 7, name: "7" },
    { value: 8, name: "8" },
    { value: 9, name: "9" },
    { value: 20, name: "Action" },
    { value: 50, name: "Wild" }
];

export default class EnterScore extends Component {
    constructor (props) {
        super(props);

        this.state = {
            score: 0
        };
    }

    incrementScore (value) {
        this.setState({
            score: this.state.score + value
        });
    }

    decrementScore (value) {
        this.setState({
            score: this.state.score - value
        });
    }

    validate () {
        if (this.state.score === 0) {
            Alert.alert('Enter a Score', 'You need to enter a score', [
                { text: 'OK' }
            ]);
        } else {
            this.props.continue(this.state.score);
        }
    }

    render () {
        const scoreInputs = CARDS.map((card, i) => {
            return (
                <EnterScore.ScoreInput
                    key={i}
                    increment={this.incrementScore.bind(this)}
                    decrement={this.decrementScore.bind(this)}
                    value={card.value}
                    name={card.name}
                />
            );
        });

        return (
            <View style={ styles.page }>
                <Text style={ styles.heading }>Enter Score</Text>
                <Text>Winner: {this.props.players[this.props.winner].name}</Text>
                <Text>Value: {this.state.score}</Text>
                {scoreInputs}
                <Button
                    containerStyle={ styles.buttonContainer }
                    style={ styles.buttonText }
                    onPress={ this.validate.bind(this) }>
                    Enter Score
                </Button>
            </View>
        );
    }
}

EnterScore.ScoreInput = ScoreInput;
