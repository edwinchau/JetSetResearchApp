import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from '../../react-native-simple-survey';
import { COLORS } from '../resources/validColors';
import DateTimePicker from "react-native-modal-datetime-picker";
import DismissKeyboard from 'react-native-dismiss-keyboard';
import moment from "moment";

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome to the React Native Simple Survey Example app! Tap next to continue'
    },
    {
        questionType: 'DateInput',
        questionText: 'Simple Survey supports date input',
        questionId: 'favoriteDate',
        placeholderText: 'Tell me your favorite date!',
    },
    {
        questionType: 'TimeInput',
        questionText: 'Simple Survey supports time input',
        questionId: 'favoriteTime',
        optional: true,
        placeholderText: 'Tell me your favorite time!',
    },
    {
        questionType: 'TextInput',
        questionText: 'Simple Survey supports free form text input',
        questionId: 'favoriteColor',
        placeholderText: 'Tell me your favorite color!',
    },
    {
        questionType: 'NumericInput',
        questionText: 'It also supports numeric input. Enter your favorite number here!',
        questionId: 'favoriteNumber',
        optional: true,
        placeholderText: '',
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Naturally Simple Survey also has multiple choice questions. What is your favorite pet?',
        questionId: 'favoritePet',
        options: [
            {
                optionText: 'Dogs',
                value: 'dog'
            },
            {
                optionText: 'Cats',
                value: 'cat'
            },
            {
                optionText: 'Ferrets',
                value: 'ferret'
            },
            {
                optionText: 'Snakes',
                value: 'snake'
            },
            {
                optionText: 'Guinea pigs',
                value: 'guinea'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Select your two favorite foods!',
        questionId: 'favoriteFoods',
        questionSettings: {
            maxMultiSelect: 3,
            minMultiSelect: 2,
        },
        options: [
            {
                optionText: 'Sticky rice dumplings',
                value: 'sticky rice dumplings'
            },
            {
                optionText: 'Pad Thai',
                value: 'pad thai'
            },
            {
                optionText: 'Steak and Eggs',
                value: 'steak and eggs'
            },
            {
                optionText: 'Tofu',
                value: 'tofu'
            },
            {
                optionText: 'Ice cream!',
                value: 'ice crem'
            },
            {
                optionText: 'Injera',
                value: 'injera'
            },
            {
                optionText: 'Ice cream!',
                value: 'ice cream'
            },
            {
                optionText: 'Tamales',
                value: 'tamales'
            }
        ]
    },
    {
        questionType: 'Info',
        questionText: 'That is all for the demo, tap finish to see your results!'
    },
];

export default class SurveyScreenExample extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: GREEN,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Sample Survey',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            backgroundColor: PURPLE,
            surveyDateTime: ''
        };
    }

    onSurveyFinished(answers) {
        /**
         *  By using the spread operator, array entries with no values, such as info questions, are removed.
         *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
         *  to the rest of your code, can be done.
         *
         *  Answers are returned in an array, of the form
         *  [
         *  {questionId: string, value: any},
         *  {questionId: string, value: any},
         *  ...
         *  ]
         *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
         *  to you.
         *
         *  As an example
         *  {
         *      questionId: "favoritePet",
         *      value: {
         *          optionText: "Dogs",
         *          value: "dog"
         *      }
         *  }
         *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a
         *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
         */
        const infoQuestionsRemoved = [...answers];

        // Convert from an array to a proper object. This won't work if you have duplicate questionIds
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('SurveyCompleted', { surveyAnswers: answersAsObj });
    }

    /**
     *  After each answer is submitted this function is called. Here you can take additional steps in response to the
     *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is
     *  is restricted (age, geo-fencing) from your app.
     */
    onAnswerSubmitted(answer) {
        switch (answer.questionId) {
            case 'favoriteColor': {
                if (COLORS.includes(answer.value.toLowerCase())) {
                    this.setState({ backgroundColor: answer.value.toLowerCase() });
                }
                break;
            }
            default:
                break;
        }
    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Next'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'finished'}
                    onPress={onPress }
                    disabled={!enabled}
                    color={GREEN}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? GREEN : PURPLE}
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderTextBox(onChange, placeholder, value) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={3}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value) {
        return (<TextInput
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            keyboardType={'numeric'}
            maxLength={3}
        />);
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }










    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        this.hideDateTimePicker();
        let temp = moment(String(date)).format('DD MMM, YYYY');
        this.setState({surveyDateTime: temp});
    };

    handleTimePicked = time => {
        this.hideDateTimePicker();
        this.setState({surveyDateTime: String(time)});
    };

    dateTimeOnFocus = () => {
        DismissKeyboard();
        this.showDateTimePicker();
    }

    renderDateBox = (onChange, placeholder, value) => {
        return (
            <>
                <DateTimePicker
                    isVisible={ this.state.isDateTimePickerVisible }
                    onConfirm={ this.handleDatePicked }
                    onCancel={ this.hideDateTimePicker }
                />

                <TextInput
                    onFocus = {this.dateTimeOnFocus}
                    style={styles.textBox}
                    onContentSizeChange={text => onChange(this.state.surveyDateTime)}
                    numberOfLines={3}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={this.state.surveyDateTime}
                    blurOnSubmit
                />

            </>
        );
    }

    renderTimeBox = (onChange, placeholder, value) => {
        return (
            <>
                <DateTimePicker
                    isVisible={ this.state.isDateTimePickerVisible }
                    onConfirm={ this.handleTimePicked }
                    onCancel={ this.hideDateTimePicker }
                    mode={ 'time' }
                />

                <TextInput
                    onFocus = {this.dateTimeOnFocus}
                    style={styles.textBox}
                    onContentSizeChange={text => onChange(this.state.surveyDateTime)}
                    numberOfLines={3}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={this.state.surveyDateTime}
                    blurOnSubmit
                />

            </>
        );
    }

    answerSubmit = (answer) => {
        this.onAnswerSubmitted(answer)
        this.setState({surveyDateTime: ''});
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.answerSubmit(answer)}
                        renderTextInput={this.renderTextBox}
                        renderDateInput={this.renderDateBox}
                        renderTimeInput={this.renderTimeBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        height: 30,
        width: 140,
        borderRadius: 10,
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
        borderRadius: 10,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
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
        backgroundColor: GREEN,
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
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,

        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
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
});
