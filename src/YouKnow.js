
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class YouKnow extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    You Know
                </Text>
                <Text style={styles.text}>
                    To get started, edit index.ios.js
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
        margin: 20
    },
    heading: {
        fontSize: 20,
        marginBottom: 20
    },
    text: {
        color: '#333333',
    },
});
