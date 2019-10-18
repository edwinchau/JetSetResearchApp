import { StyleSheet } from 'react-native';

const defaultColor = '#DF4425'

let styles = StyleSheet.create({

    usydlogo: {
        // USYD Logo
        width: 150,
        height: 150
    },
    headerStyle: {
        backgroundColor: defaultColor,
        height: 40,
        elevation: 5,
    },
    background: {
        // General Layout of the app 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: defaultColor,
    },
    // backgroundAdmin: {
    //     flex: 1,
    //     alignItems: 'center',
    //     backgroundColor: defaultColor,
    //     paddingVertical: 10 // Pads from the top of the container
    //     // justifyContent: 'space-between'
    // },
    elementPadding: {
        // Have space between each element in a container
        // To be used with "View"
        paddingVertical: 5
    },
    button: {
        // Use Touchable Opactiy and style it using this 
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
    },
    buttonTextColour: {
        color: 'white',
        fontWeight: 'bold'
    },

    surveyButtons: {
        flexGrow: 1,
        maxWidth: 100,
        marginTop: 10,
        marginBottom: 10
    },
    surveyQuestionText: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    surveyTextBox: {
        // Used to render the textBox, dateBox and timeBox
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: defaultColor,
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10,
        minWidth: '70%',
        maxWidth: '90%',
    },
    surveyNumericInput: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: defaultColor,
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10,
    },
    surveyInfoText: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: "center"
    },
    surveySelectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: defaultColor,
        alignContent: 'flex-end',
    },
    surveyNavButtonContainer: {
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


    // ------------------ Below is unused ----------------------

    // container: {
    //     minWidth: '30%',
    //     maxWidth: '90%',
    //     borderWidth:1,
    //     borderColor:'black',
    //     backgroundColor: 'black',
    //     alignItems:'center',
    //     justifyContent:'center',
    //     borderRadius:50,
    // }
});

module.exports = styles;
