import React from 'react';
import moment from "moment-timezone";

/**
 * Generates a CSV string given survey answers and survey questions. Both survey answers and the survey questions need
 * to be passed into the function as the survey package ignores skipped questions.
 *
 * @param surveyAnswers The JSON output of the survey
 * @param surveyQuestions The questions asked within a survey in the JSON format
 * @returns {string} A CSV string of the users response to survey
 */
export const SurveyAnswersParse = (surveyAnswers, surveyQuestions) => {
    let questionList = [];
    let timeDateQuestions = [];

    // Obtaining a list of survey questions
    surveyQuestions.forEach(function(question) {
        if (question.questionId !== undefined) {
            questionList.push(question.questionId);

            if (question.questionType == 'TimeInput' || question.questionType == 'DateInput') {
                timeDateQuestions.push(question.questionId);
            }
        }
    });

    let csvString = String(moment(Date.now()).tz('Australia/Sydney')) + ",";

    // Generating the CSV string
    questionList.forEach(function(question) {
        let answer = surveyAnswers[question];

        if (answer !== undefined) {
            if (typeof answer === 'object') {
                answer = answer["value"];
            }

            if (timeDateQuestions.includes(question)) {
                let sydneyTimeConversion = moment(new Date(answer));
                answer = String(sydneyTimeConversion.tz('Australia/Sydney'));
            }

            if (answer === 'Invalid date') {
                answer = "";
            }

            csvString = csvString + answer + ",";

        } else {
            csvString = csvString +  ",";
        }
    });

    csvString = csvString.slice(0,-1);

    return csvString;
}

export const SurveyQuestions = (surveyQuestions) => {

    let csvString = "timeDateCompleted,";

    // Obtaining a list of survey questions
    surveyQuestions.forEach(function(question) {
        if (question.questionId !== undefined) {
            csvString = csvString + question.questionId + ",";
        }
    });

    csvString = csvString.slice(0,-1);

    return csvString;
}
