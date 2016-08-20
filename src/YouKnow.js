
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import NavigationBarRouteMapper from './NavigationBarRouteMapper';

import GameSetup from './components/GameSetup';

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
        this.setStage(Stage.GAME_ROUND);
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

    render() {
        switch (this.state.stage) {
            case Stage.GAME_SETUP:
                return <GameSetup
                            continue={this.moveToGameRound.bind(this)}
                            addPlayer={this.addPlayer.bind(this)}
                            removePlayer={this.removePlayer.bind(this)}
                            players={this.state.players}
                            goal={this.state.goal}
                            updateGoal={this.updateGoal.bind(this)}
                        />;

            // case Stage.GAME_ROUND:
            //     return <GameRound continue={this.moveToEnterScore} players={this.state.players} />;
            //
            // case Stage.ENTER_SCORE:
            //     return <EnterScore continue={this.moveToNextRound} winner={this.state.players[this.state.winner].name} />;
            //
            // case Stage.WINNER:
            //     return <Winner winner={this.state.players[this.state.winner]} restartGame={this.restartGame} resetGame={this.resetGame} />;

            // default:
            //     return <Splash />;
        };
    }
}
