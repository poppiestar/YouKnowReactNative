
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import GoalSelect from './GoalSelect';

export default class SetGoal extends Component {
    render () {
        return (
            <View>
                <Text>Set Game Goal</Text>
                <GoalSelect goal={this.props.goal} updateGoal={this.props.updateGoal} />
            </View>
        );
    }
}
