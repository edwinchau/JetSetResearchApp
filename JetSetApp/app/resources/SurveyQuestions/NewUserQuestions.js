export const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome New User'
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
        questionType: 'TimeInput',
        questionText: 'What time to change? (TESTING ONLY)',
        questionId: 'swapTimeTesting',
        placeholderText: 'TESTING ONLY',
    },
    {
        questionType: 'NumericInput',
        questionText: 'How many Seconds before going back to normal? (TESTING ONLY)',
        questionId: 'swapSecondsTesting',
        placeholderText: 'TESTING ONLY',
    },
];
