
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import GoalSelect from './GoalSelect';

import styles from '../../styles/main';

export default class SetGoal extends Component {
    render () {
        return (
            <View style={ styles.component }>
                <Text style={ styles.subheading }>Set Game Goal</Text>
                <GoalSelect goal={this.props.goal} updateGoal={this.props.updateGoal} />
            </View>
        );
    }
}
