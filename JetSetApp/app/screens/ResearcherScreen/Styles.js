import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    input: {
        height: 40, borderColor: 'gray', borderWidth: 1
    },
    button: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'rgba(106,177,135,1)',
        fontSize: 30,
        fontWeight: 'bold',
        borderRadius: 15,
        paddingTop: 13,
        paddingBottom: 13,
        marginTop: 10,
        marginBottom: 10,
    },
    headerStyle: {
        backgroundColor: 'rgba(106,177,135,1)',
        height: 40,
        elevation: 5,
    },
});

module.exports = styles;
