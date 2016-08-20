
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    action: {
        borderWidth: 1,
    },
    heading: {
        fontSize: 25,
        marginBottom: 20
    },
    subheading: {
        fontSize: 20,
        marginBottom: 10
    },
    text: {
        color: '#333333',
    },
    component: {
        marginBottom: 20
    },
    scoreInput: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    playerList: {
        paddingHorizontal: 20
    },
    playerListItem: {
        fontSize: 20,
        marginBottom: 10
    },
    playerScore: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    playerScoreName: {
        fontSize: 20
    },
    playerScoreValue: {
        fontSize: 20
    },
    buttonContainer: {
        padding: 10,
        height: 45,
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: 'blue'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    goal: {
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 10
    }
});

export default styles;
