import React, { Component } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import styles from './Styles'
import { SurveyAnswersParse } from '../../resources/SurveyAnswersParse/SurveyAnswersParse'
import SaveData from '../../resources/SaveData/SaveData';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';
const defaultAnswers = { favoriteDate: 'nothing', favoriteColor: 'nothing', favoriteNumber: '0', favoritePet: 'nothing' };

export default class SurveyCompletedScreenExample extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitle: 'Survey Results',
            headerTitleStyle: {
                flex: 1,
            },
            headerLeft: null,
            gesturesEnabled: false
        };
    };

    render() {
        const { navigate } = this.props.navigation;
        let answers = this.props.navigation.getParam('surveyAnswers');
        const surveyQuestions = this.props.navigation.getParam('surveyQuestions');
        console.log(this.props.navigation.getParam('surveyName'));

        let fileSaveLocation = this.props.navigation.getParam('surveyName');

        /**
         * Saves the user data as a JSON instead of a CSV. If there are any files that need to be saved a saved as a JSON
         * include it in the if statement.
         */
        if (this.props.navigation.getParam('surveyName') === "NewUserQuestions") {
            fileSaveLocation = fileSaveLocation + ".json";
            answers = JSON.stringify(answers);
        } else {
            fileSaveLocation = fileSaveLocation + ".csv";
            answers = SurveyAnswersParse(answers, surveyQuestions);
        }

        SaveData.saveNewFile(answers, fileSaveLocation);

        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    {/*<Text style={styles.questionText}>The results are in!</Text>*/}
                    {/*<Text style={styles.questionText}>Your favorite date: {answers.favoriteDate}</Text>*/}
                    {/*<Text style={styles.questionText}>Your favorite color: {answers.favoriteColor}</Text>*/}
                    {/*<Text style={styles.questionText}>Your favorite number: {answers.favoriteNumber}</Text>*/}
                    {/*<Text style={styles.questionText}>Your favorite pet: {answers.favoritePet.value}</Text>*/}
                    {/*<Text style={styles.questionText}>Your favorite foods: {answers.favoriteFoods[0].value} and {answers.favoriteFoods[1].value}</Text>*/}
                    <Text>Raw JSON: {JSON.stringify(this.props.navigation.getParam('surveyAnswers', {}))}</Text>
                    <Button
                        onPress={() => navigate('Home')}
                        title="Back Home"
                    />
                </View>

            </View>
        );
    }
}
