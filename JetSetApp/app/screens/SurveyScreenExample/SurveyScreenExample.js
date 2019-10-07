import React, { Component } from 'react';
import { ScrollView, Button, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from '../../../react-native-simple-survey';
import { COLORS } from '../../resources/validColors';
import DateTimePicker from "react-native-modal-datetime-picker";
import DismissKeyboard from 'react-native-dismiss-keyboard';
import moment from 'moment';

import styles from './Styles'

import SurveyLocations from '../../resources/SurveyQuestions/SurveyLocations';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

export default class SurveyScreenExample extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitle: navigation.getParam('survey'),
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

        this.props.navigation.navigate('SurveyCompleted', { surveyAnswers: answersAsObj,
            surveyQuestions: SurveyLocations[this.props.navigation.getParam('survey')],
            surveyName: this.props.navigation.getParam('survey')});
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
        date = moment(date).format('MM/DD/YYYY');
        this.setState({surveyDateTime: String(date)});
    };

    handleTimePicked = time => {
        this.hideDateTimePicker();
        time = moment(time).format('h:mm a');
        this.setState({surveyDateTime: String(time)});
    };

    dateTimeOnFocus = () => {
        DismissKeyboard();
        this.showDateTimePicker();
    };

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
    };

    renderTimeBox = (onChange, placeholder, value) => {
        return (
            <>
                <DateTimePicker
                    isVisible={ this.state.isDateTimePickerVisible }
                    onConfirm={ this.handleTimePicked }
                    onCancel={ this.hideDateTimePicker }
                    mode={ 'time' }
                    titleIOS={'Pick a time'}
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
    };

    answerSubmit = (answer) => {
        this.onAnswerSubmitted(answer);
        this.setState({surveyDateTime: ''});
    };

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>

                        <SimpleSurvey
                            survey={SurveyLocations[this.props.navigation.getParam('survey')]}
                            renderSelector={this.renderButton.bind(this)}
                            containerStyle={styles.surveyContainer}
                            selectionGroupContainerStyle={styles.selectionGroupContainer}
                            navButtonContainerStyle={styles.navButtonContainer}
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

                </ScrollView>
            </View>
        );
    }
}
