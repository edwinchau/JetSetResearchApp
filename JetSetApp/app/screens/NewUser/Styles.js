import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(244,204,112,1)',
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 15,
        paddingTop: 13,
        paddingBottom: 13,
        marginTop: 10,
        marginBottom: 10,
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
