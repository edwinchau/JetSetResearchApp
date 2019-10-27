export const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome and thank you for participating the JetSet Survey App!, press next to proceed'
    },
    {
        questionType: 'NumericInput',
        questionText: 'What is your User ID?',
        questionId: 'userID',
        placeholderText: 'User ID',
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Please select your flight',
        questionId: 'flightDetails',
        options: [
            {
                optionText: 'JFK-SYD',
                value: 'JFK'
            },
            {
                optionText: 'LHR-SYD',
                value: 'LHR'
            },
            {
                optionText: 'TEST-SYD',
                value: 'TEST'
            }
        ]
    },
    {
        questionType: 'DateInput',
        questionText: 'What day is your flight?',
        questionId: 'dateOfFlight',
        placeholderText: 'Date of flight',
    },
    // {
    //     questionType: 'TimeInput',
    //     questionText: 'What time do you usually have breakfast?',
    //     questionId: 'timeOfBreakfast',
    //     placeholderText: 'Breakfast time',
    // },
    // {
    //     questionType: 'TimeInput',
    //     questionText: 'What time do you usually have lunch?',
    //     questionId: 'timeOfLunch',
    //     placeholderText: 'Lunch time',
    // },
    // {
    //     questionType: 'TimeInput',
    //     questionText: 'What time do you usually have dinner?',
    //     questionId: 'timeOfDinner',
    //     placeholderText: 'Dinner time',
    // },
    // {
    //     questionType: 'TimeInput',
    //     questionText: 'What time do you usually go to bed?',
    //     questionId: 'timeOfSleep',
    //     placeholderText: 'Bed time',
    // },
    // {
    //     questionType: 'TimeInput',
    //     questionText: 'What time do you usually wake up?',
    //     questionId: 'timeOfWakeup',
    //     placeholderText: 'Wake up time',
    // },
    {
        questionType: 'Info',
        questionText: 'Thank you for adding your details, your response has been logged!'
    },
];
