import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    usydlogo: {
        width: 150,
        height: 150
    },
    background: {
        flex: 1,
        justifyContent: 'center',
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
    navButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    homeButton: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'orange',
        elevation: 20,
        borderRadius: 15,
        paddingTop: 13,
        paddingBottom: 13,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'orange',
        borderRadius:50,
        flexDirection: 'column'
    },
    button: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'orange',
        fontSize: 30,
        fontWeight: 'bold',
        borderRadius: 15,
        paddingTop: 13,
        paddingBottom: 13,
        marginTop: 10,
        marginBottom: 10,
    },
});

module.exports = styles;
