import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DF4425',
        // padding: 100
    },
    container: {
        minWidth: '30%',
        maxWidth: '90%',
        borderWidth:1,
        borderColor:'black',
        backgroundColor: 'black',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    headerStyle: {
        backgroundColor: '#DF4425',
        height: 40,
        elevation: 5,
    },
});

module.exports = styles;
