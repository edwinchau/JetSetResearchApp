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
        // width: 'auto',
        // alignSelf: 'center',
        // backgroundColor: 'rgba(222,122,34,1)',
        // borderBottomLeftRadius: 5,
        // borderBottomRightRadius: 5,
        // borderTopLeftRadius: 5,
        // borderTopRightRadius: 5,
        // alignContent: 'center',
        // borderRadius: 15,
        // paddingTop: 13,
        // paddingBottom: 13,
        // marginTop: 90,
        // marginBottom: 10,
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
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
        backgroundColor: '#DF4425',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: '#DF4425',
        alignContent: 'flex-end',
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#DF4425',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10,
        minWidth: '70%',
        maxWidth: '90%',
    },
    nextPreviousButton: {
        flexGrow: 1,
        maxWidth: 100,
        marginTop: 10,
        marginBottom: 10
    },
    navButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    homeButtonContainer: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'black',
        elevation: 20,
        borderRadius: 15,
        paddingTop: 5,
        paddingBottom: 5,
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
    passwordTextbox: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        minWidth: '70%',
        maxWidth: '90%',
    },
    adminButton: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
    },
    backgroundAdmin: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DF4425',
        paddingVertical: 10 // Pads from the top of the container
        // justifyContent: 'space-between'
    },
    elementPadding: {
        paddingVertical: 5
    },
    buttonTextColour: {
        color: 'white',
        fontWeight: 'bold'
    }
});

module.exports = styles;
