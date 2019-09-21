import React from 'react';

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

    // Obtaining a list of survey questions
    surveyQuestions.forEach(function(question) {
        if (question.questionId !== undefined) {
            questionList.push(question.questionId);
        }
    });

    let csvString = "";

    // Generating the CSV string
    questionList.forEach(function(question) {
        let answer = surveyAnswers[question];

        if (answer !== undefined) {
            if (typeof answer === 'object') {
                answer = answer["value"];
            }

            csvString = csvString + answer + ",";

        } else {
            csvString = csvString +  ",";
        }
    });

    csvString = csvString.slice(0,-1);

    return csvString;
}
