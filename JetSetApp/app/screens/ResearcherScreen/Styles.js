import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(108,48,237,1)',
    },
    container: {
        paddingTop: 400,
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    headerStyle: {
        backgroundColor: 'rgba(141,196,63,1)',
        height: 40,
        elevation: 5,
    },
    button: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
});

module.exports = styles;
