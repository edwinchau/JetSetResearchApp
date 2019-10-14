import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    button: {
        margin: 10,
        height: 30,
        width: 140,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
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
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'rgba(222,122,34,1)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        borderRadius: 15,
        paddingTop: 13,
        paddingBottom: 13,
        marginTop: 90,
        marginBottom: 10,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'rgba(222,122,34,1)',
        alignContent: 'flex-end',
    },
    navButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    navButtonText: {
        margin: 10,
        fontSize: 20,
        color: 'white',
        width: 'auto'
    },
    answers: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    navigationButton: {
        minHeight: 40,
        backgroundColor: 'rgba(141,196,63,1)',
        padding: 0,
        borderRadius: 100,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20,
        color: 'white',
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'rgba(222,122,34,1)',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'rgba(222,122,34,1)',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
    headerStyle: {
        backgroundColor: 'rgba(106,177,135,1)',
        height: 40,
        elevation: 5,
    },
});

module.exports = styles;
