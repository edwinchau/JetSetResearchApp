export const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome to the React Native Simple Survey Example app! Tap next to continue'
    },
    {
        questionType: 'DateInput',
        questionText: 'Simple Survey supports date input',
        questionId: 'favoriteDate',
        placeholderText: 'Tell me your favorite date!',
    },
    {
        questionType: 'TimeInput',
        questionText: 'Simple Survey supports time input',
        questionId: 'favoriteTime',
        optional: true,
        placeholderText: 'Tell me your favorite time!',
    },
    {
        questionType: 'TextInput',
        questionText: 'Simple Survey supports free form text input',
        questionId: 'favoriteColor',
        placeholderText: 'Tell me your favorite color!',
    },
    {
        questionType: 'NumericInput',
        questionText: 'It also supports numeric input. Enter your favorite number here!',
        questionId: 'favoriteNumber',
        optional: true,
        placeholderText: '',
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Naturally Simple Survey also has multiple choice questions. What is your favorite pet?',
        questionId: 'favoritePet',
        options: [
            {
                optionText: 'Dogs',
                value: 'dog'
            },
            {
                optionText: 'Cats',
                value: 'cat'
            },
            {
                optionText: 'Ferrets',
                value: 'ferret'
            },
            {
                optionText: 'Snakes',
                value: 'snake'
            },
            {
                optionText: 'Guinea pigs',
                value: 'guinea'
            }
        ]
    },
    {
        questionType: 'MultipleSelectionGroup',
        questionText:
            'Select your two favorite foods!',
        questionId: 'favoriteFoods',
        questionSettings: {
            maxMultiSelect: 3,
            minMultiSelect: 2,
        },
        options: [
            {
                optionText: 'Sticky rice dumplings',
                value: 'sticky rice dumplings'
            },
            {
                optionText: 'Pad Thai',
                value: 'pad thai'
            },
            {
                optionText: 'Steak and Eggs',
                value: 'steak and eggs'
            },
            {
                optionText: 'Tofu',
                value: 'tofu'
            },
            {
                optionText: 'Ice cream!',
                value: 'ice crem'
            },
            {
                optionText: 'Injera',
                value: 'injera'
            },
            {
                optionText: 'Ice cream!',
                value: 'ice cream'
            },
            {
                optionText: 'Tamales',
                value: 'tamales'
            }
        ]
    },
    {
        questionType: 'Info',
        questionText: 'That is all for the demo, tap finish to see your results!'
    },
];
