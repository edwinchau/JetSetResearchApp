import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    headerStyle: {
        backgroundColor: 'rgba(106,177,135,1)',
        height: 40,
        elevation: 5,
    },
});

module.exports = styles;
