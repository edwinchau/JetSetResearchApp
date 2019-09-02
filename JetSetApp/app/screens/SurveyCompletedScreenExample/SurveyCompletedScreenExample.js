import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './Styles'

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
            }
        };
    };

    render() {
        const answers = this.props.navigation.getParam('surveyAnswers', defaultAnswers);

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
                </View>
            </View>
        );
    }
}
