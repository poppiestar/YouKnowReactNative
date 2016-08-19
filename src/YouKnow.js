
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import NavigationBarRouteMapper from './NavigationBarRouteMapper';

import styles from './styles/main';
import GameSetup from './components/GameSetup';

export default class YouKnow extends Component {
    constructor (props) {
        super(props);

        this.state = {
            players: [],
            goal: 500
        };
    }

    getInitialRoute (state) {
        return {
            component: GameSetup,
            passProps: {
                goal: this.state.goal
            }
        };
    }

    renderScene (route, navigator) {
        return React.createElement(route.component, { ...this.props, ...route.passProps, route, navigator } );
    }

    render() {
        return (
            <Navigator
                initialRoute={ this.getInitialRoute(this.state) }
                renderScene={ this.renderScene.bind(this) }
                style={ styles.nav }
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={ NavigationBarRouteMapper } />
                }
            />
        );
    }
}
