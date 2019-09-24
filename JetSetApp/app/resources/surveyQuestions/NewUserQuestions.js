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
    }
];
