
import React, { Component } from 'react';
import { SegmentedControlIOS } from 'react-native';

const goals = ['300', '500', '750', '1000'];

export default class GoalSelect extends Component {
    handleChange (e) {
        this.props.updateGoal(goals[e.nativeEvent.selectedSegmentIndex]);
    }

    render () {
        return (
            <SegmentedControlIOS values={ goals }
                onChange={ this.handleChange.bind(this) }
                selectedIndex={ goals.indexOf(this.props.goal.toString()) }
            />
        );
    }
}
