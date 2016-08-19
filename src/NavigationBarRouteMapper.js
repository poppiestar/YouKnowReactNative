
import React from 'react';
import { LeftButton, RightButton, Title, Text } from 'react-native';
import Button from 'react-native-button';

import styles from './styles/nav';

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <Button
                    style={ styles.navButton }
                    onPress={() => { if (index > 0) { navigator.pop(); } }}>
                    Back
                </Button>
            );
        } else {
            return null
        };
    },
    RightButton(route, navigator, index, navState) {
        if (route.onPress) return (
            <Button
                style={ styles.navButton }
                onPress={ () => route.onPress() }>
                { route.rightText || 'Right Button' }
            </Button>
        );
    },
    Title(route, navigator, index, navState) {
        return <Text style={ styles.navTitle }>Setup</Text>
    }
};

export default NavigationBarRouteMapper;
