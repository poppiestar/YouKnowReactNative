
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
        paddingTop: 50,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    action: {
        borderWidth: 1,
    },
    heading: {
        fontSize: 20,
        marginBottom: 20
    },
    subheading: {
        fontSize: 15,
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
        flexDirection: 'row'
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
    }
});

export default styles;
