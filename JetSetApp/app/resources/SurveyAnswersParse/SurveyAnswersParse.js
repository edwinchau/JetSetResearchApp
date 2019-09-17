import React from 'react';

export const SurveyAnswersParse = (surveyAnswers, surveyQuestions) => {
    let questionList = [];

    surveyQuestions.forEach(function(question) {
        if (question.questionId !== undefined) {
            questionList.push(question.questionId);
        }
    });

    let csvString = "";

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

    console.log(questionList);
    console.log(csvString);

    return csvString;
}
