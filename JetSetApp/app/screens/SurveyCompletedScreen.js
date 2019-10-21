import React, { Component } from 'react';
import {Button, Text, View} from 'react-native';

import styles from '../resources/Styles'
import { SurveyAnswersParse, SurveyQuestions } from '../resources/SurveyAnswersParse'
import SaveData from '../resources/SaveData';


export default class SurveyCompletedScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            // headerTitle: 'Survey Results',
            headerTitleStyle: {
                flex: 1,
            },
            headerLeft: null,
            gesturesEnabled: false
        };
    };

    componentDidMount() {
        this.props.navigation.navigate('Home');
    }

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

            SaveData.saveNewFile(answers, fileSaveLocation);
        } else {
            fileSaveLocation = fileSaveLocation + ".csv";
            answers = SurveyAnswersParse(answers, surveyQuestions);
            let questions = SurveyQuestions(surveyQuestions);

            SaveData.saveSurveyResults(fileSaveLocation, answers, questions);
        }

        return (
            <View style={styles.background}>
                {/*<View style={styles.container}>*/}
                {/*    <Text>Raw JSON: {JSON.stringify(this.props.navigation.getParam('surveyAnswers', {}))}</Text>*/}
                {/*    <Button*/}
                {/*        onPress={() => navigate('Home')}*/}
                {/*        title="Back Home"*/}
                {/*    />*/}
                {/*</View>*/}
            </View>
        );
    }
}
