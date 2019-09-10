export const survey = [
    {
        questionType: 'TimeInput',
        questionText: 'What time did you have dinner',
        questionId: 'mealTime',
        optional: true,
        placeholderText: 'Enter meal time',
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Have you had a nap since previous survey',
        questionId: 'napTaken',
        options: [
            {
                optionText: 'Yes',
                value: 'YesNap'
            },
            {
                optionText: 'No',
                value: 'NoNap'
            }
          ]
        },
    {
        questionType: 'TimeInput',
        questionText: 'What time did you start the nap?',
        questionId: 'napTime',
        optional: true,
        placeholderText: 'Enter nap time',
    },
    {
        questionType: 'TextInput',
        questionText: 'How long was your nap in minutes',
        questionId: 'napDuration',
        optional: true,
        placeholderText: 'Number of minutes',
    },
    {
        questionType: 'TextInput',
        questionText: 'How many caffeinated beverages did you have with the meal?',
        questionId: 'numberCaffeine',
        optional: true,
        placeholderText: 'Number of beverages',
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Please select the number that represents your sleepiness level during the last five minutes',
        questionId: 'kssResult',
        options: [
            {
                optionText: '1. Extremely alert',
                value: '1'
            },
            {
                optionText: '2. Very alert',
                value: '2'
            },
            {
                optionText: '3. Alert',
                value: '3'
            },
            {
                optionText: '4. Rather alert ',
                value: '4'
            },
            {
                optionText: '5. Neither alert nor sleepy ',
                value: '5'
            },
            {
                optionText: '6. Some signs of sleepiness ',
                value: '6'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'How much jetlag do you have?',
        questionId: 'jetlagResult',
        options: [
            {
                optionText: '0 - Insignificant jetlag',
                value: '0'
            },
            {
                optionText: '1',
                value: '1'
            },
            {
                optionText: '2',
                value: '2'
            },
            {
                optionText: '3',
                value: '3'
            },
            {
                optionText: '4',
                value: '4'
            },
            {
                optionText: '5 - Very bad jetlag',
                value: '5'
            }
        ]
    },

    {
        questionType: 'Info',
        questionText: 'That is all for the demo, tap finish to see your results!'
    },
];
