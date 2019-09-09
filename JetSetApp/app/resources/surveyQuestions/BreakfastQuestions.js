export const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome to the React Native Simple Survey Example app! Tap next to continue'
    },
    {
        questionType: 'DateInput',
        questionText: 'What is your flight date!',
        questionId: 'flightDate',
        placeholderText: 'Enter your flight date!',
    },
    {
        questionType: 'TextInput',
        questionText: 'What is your flight destination',
        questionId: 'flightDestination',
        placeholderText: 'Enter your flight destination!',
    },
    {
        questionType: 'NumericInput',
        questionText: 'What is your age!',
        questionId: 'paticipantAge',
        optional: true,
        placeholderText: 'Enter your age',
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Please select your flight',
        questionId: 'flightDetails',
        options: [
            {
                optionText: 'JFK-SYD dep 21:00 from New York; arrive 7:30 Syd time',
                value: 'JFK'
            },
            {
                optionText: 'LHR-SYD dep 10:00 from London; arrive 17:00 Syd time',
                value: 'LHR'
            }
        ]
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
        questionType: 'MultipleSelectionGroup',
        questionText:
            'What did you have?',
        questionId: 'mealsEaten',
        questionSettings: {
            maxMultiSelect: 4,
            minMultiSelect: 1,
        },
        options: [
            {
                optionText: 'Breakfast',
                value: 'breakfast'
            },
            {
                optionText: 'Lunch',
                value: 'lunch'
            },
            {
                optionText: 'Dinner',
                value: 'dinner'
            },
            {
                optionText: 'Snacks',
                value: 'snack'
            }
        ]
    },
    {
        questionType: 'TimeInput',
        questionText: 'What time did you eat your food',
        questionId: 'mealTime',
        optional: true,
        placeholderText: 'Enter meal time',
    },
    {
        questionType: 'Info',
        questionText: 'That is all for the demo, tap finish to see your results!'
    },
];
