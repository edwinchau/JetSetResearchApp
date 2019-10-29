import { StyleSheet } from 'react-native';

let defaultColor = '#FFFFFF';
let defaultTextSize = 23;

const styles = StyleSheet.create({
    mainText: {
        fontWeight: "bold",
        fontSize: 30
    },
    usydlogo: {
        // USYD Logo
        width: 250,
        height: 250
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
    elementPadding: {
        // Have space between each element in a container
        // To be used with "View"
        paddingVertical: 5
    },
    button: {
        // Use Touchable Opactiy and style it using this
        alignItems: 'center',
        backgroundColor: 'darkorange',
        padding: 10,
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },

    surveyButtonContainer: {
        flexGrow: 1,
        maxWidth: 100,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'darkorange',
        borderWidth: 2
    },
    surveyButton: {
        color: "yellow"
    },
    surveyQuestionContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    surveyQuestionText: {
        marginBottom: 20,
        fontSize: defaultTextSize,
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
        fontSize: defaultTextSize,
        fontWeight: "bold",
        textAlign: "center"
    },
    surveySelectionGroupContainer: {
        flexDirection: 'column',
        alignContent: 'flex-end',
        marginLeft: 40,
        marginRight: 40,
    },
    surveySelectionGroupContainerOption: {
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'flex-start',
        borderWidth: 2,
        backgroundColor: 'orange'
    },
    surveyNavButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    homeInformation: {
        fontSize: 20
    },
    homeButtonContainer: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        elevation: 20,
        borderRadius: 15,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'darkorange',
        borderColor: 'black',
        borderWidth: 2
    },
    researcherButtonContainer: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        elevation: 20,
        borderRadius: 15,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'maroon',
        borderColor: 'black',
        borderWidth: 2
    },
    homeButtonText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
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
        fontSize: 15
    },
});

module.exports = styles;
