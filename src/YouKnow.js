
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import NavigationBarRouteMapper from './NavigationBarRouteMapper';
import update from 'react-addons-update';

import GameSetup from './components/GameSetup';
import GameRound from './components/GameRound';
import EnterScore from './components/EnterScore';
import Winner from './components/Winner';

const Stage = {
    GAME_SETUP: 1,
    GAME_ROUND: 2,
    ENTER_SCORE: 3,
    WINNER: 4
};

export default class YouKnow extends Component {
    constructor (props) {
        super(props);

        this.state = {
            players: [],
            goal: 500,
            stage: Stage.GAME_SETUP
        };
    }

    updateGoal (goal) {
        this.setState({ goal: goal });
    }

    moveToGameRound () {
        this.setState({ stage: Stage.GAME_ROUND });
    }

    moveToEnterScore () {
        this.setState({ stage: Stage.ENTER_SCORE });
    }

    moveToNextRound (score) {
        // add score to winner's score table
        let players = update(this.state.players, {
            [this.state.winner]: {
                scores: { $push: [score] }
            }
        });

        const winner = players[this.state.winner];

        // calculate winner's total to see if they've beaten the goal
        if (this.calculateTotal(winner.scores) >= this.state.goal) {
            this.setState({
                players: players,
                stage: Stage.WINNER
            });
        } else {
            this.setState({
                players: players,
                stage: Stage.GAME_ROUND,
                winner: undefined
            });
        }
    }

    calculateTotal (scores) {
        return scores.reduce( (prev, curr) => prev + curr );
    }

    newPlayer (name) {
        return {
            name: name,
            scores: [0]
        };
    }

    addPlayer (name) {
        this.setState({ players: this.state.players.concat(this.newPlayer(name)) });
    }

    removePlayer (player) {
        this.setState({
            players: this.state.players.filter((candidate) => {
                return candidate.name !== player.name;
            })
        });
    }

    selectWinner (id) {
        this.setState({ winner: id });
    }

    restartGame () {
        this.setState({
            stage: Stage.GAME_ROUND,
            goal: this.state.goal,
            players: this.state.players.map( (player) => {
                return this.newPlayer(player.name);
            })
        });
    }

    resetGame () {
        this.setState({
            players: [],
            goal: 500,
            stage: Stage.GAME_SETUP
        });
    }

    render() {
        switch (this.state.stage) {
            case Stage.GAME_SETUP:
                return <GameSetup
                            continue={ this.moveToGameRound.bind(this) }
                            addPlayer={ this.addPlayer.bind(this) }
                            removePlayer={ this.removePlayer.bind(this) }
                            players={ this.state.players }
                            goal={ this.state.goal }
                            updateGoal={ this.updateGoal.bind(this) }
                        />;

            case Stage.GAME_ROUND:
                return <GameRound
                            continue={ this.moveToEnterScore.bind(this) }
                            players={ this.state.players }
                            winner={ this.state.winner }
                            selectWinner={ this.selectWinner.bind(this) }
                        />;

            case Stage.ENTER_SCORE:
                return <EnterScore
                            continue={ this.moveToNextRound.bind(this) }
                            players={ this.state.players }
                            winner={ this.state.winner }
                        />;

            case Stage.WINNER:
                return <Winner
                            winner={ this.state.winner }
                            players={ this.state.players }
                            restartGame={ this.restartGame.bind(this) }
                            resetGame={ this.resetGame.bind(this) }
                        />;

            // default:
            //     return <Splash />;
        };
    }
}
