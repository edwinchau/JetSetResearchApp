import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DF4425',
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
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: "center"
    },
    infoTextContainer: {
        marginLeft: 10,
        marginRight: 10,
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'rgba(222,122,34,1)',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        // backgroundColor: 'rgba(222,122,34,1)',
        backgroundColor: 'orange',
        alignContent: 'flex-end',
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'rgba(222,122,34,1)',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
});

module.exports = styles;
