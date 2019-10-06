export const survey = [
    {
        questionType: 'TimeInput',
        questionText: 'What time did you have lunch',
        questionId: 'mealTime',
        optional: true,
        placeholderText: 'Enter meal time',
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'How many cups of caffeinated beverages have you consumed since the last survey? Consider cups of tea, coffee, colas, and energy drinks. 1 cup = 250 mL = 8 fluid ounces.',
        questionId: 'numberCaffeine',
        options: [
            {
                optionText: 'None',
                value: '0'
            },
            {
                optionText: '1 cup',
                value: '1'
            },
            {
                optionText: '2 cups',
                value: '2'
            },
            {
                optionText: '3 cups',
                value: '3'
            },
            {
                optionText: '4 cups',
                value: '4'
            },
            {
                optionText: '5 or more cups',
                value: '5'
            }
        ]
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
        questionText: 'If yes, what time did you start the nap?',
        questionId: 'napTime',
        optional: true,
        placeholderText: 'Enter nap time',
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'If yes, how long was the nap?',
        questionId: 'napDuration',
        options: [
            {
                optionText: 'Did not have a nap',
                value: '0'
            },
            {
                optionText: 'Less than 30 minutes',
                value: '1'
            },
            {
                optionText: '30 minutes to less than 1 hour',
                value: '2'
            },
            {
                optionText: '1 to 2 hours',
                value: '3'
            },
            {
                optionText: 'More than 2 hours',
                value: '4'
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
                optionText: 'Extremely alert',
                value: '1'
            },
            {
                optionText: 'Very alert',
                value: '2'
            },
            {
                optionText: 'Alert',
                value: '3'
            },
            {
                optionText: 'Rather alert ',
                value: '4'
            },
            {
                optionText: 'Neither alert nor sleepy ',
                value: '5'
            },
            {
                optionText: 'Some signs of sleepiness ',
                value: '6'
            },
            {
                optionText: 'Sleepy, but no effort to keep awake ',
                value: '7'
            },
            {
                optionText: 'Sleepy, some effort to keep awake ',
                value: '8'
            },
            {
                optionText: 'Very sleepy, great effort to keep awake, fighting sleep ',
                value: '9'
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
              optionText: '5',
              value: '5'
          },
          {
              optionText: '6',
              value: '6'
          },
          {
              optionText: '7',
              value: '7'
          },
          {
              optionText: '8',
              value: '8'
          },
          {
              optionText: '9',
              value: '9'
          },
          {
              optionText: '10 - Very bad jetlag',
              value: '10'
          }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'While you are sitting do you have any pain in your..?',
        questionId: 'painLocation',
        options: [
            {
                optionText: 'Calves',
                value: 'Calves'
            },
            {
                optionText: 'Knees',
                value: 'Knees'
            },
            {
                optionText: 'Lower back',
                value: 'Lower back'
            },
            {
                optionText: 'Neck',
                value: 'Neck'
            },
            {
                optionText: 'None of the above',
                value: 'None of the above'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your current level of pain?',
        questionId: 'painScale',
        options: [
            {
                optionText: 'No pain',
                value: '0'
            },
            {
                optionText: 'Dull feeling of pain',
                value: '1'
            },
            {
                optionText: 'Light, continuous pain',
                value: '2'
            },
            {
                optionText: 'More than light pain',
                value: '3'
            },
            {
                optionText: 'Annoying pain',
                value: '4'
            },
            {
                optionText: 'Severe pain',
                value: '5'
            },
            {
                optionText: 'Intolerable pain',
                value: '6'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'What is your current level of pain?',
        questionId: 'painScale',
        options: [
            {
                optionText: '🤩 The most happy',
                value: '0'
            },
            {
                optionText: '😍 Extremely happy',
                value: '1'
            },
            {
                optionText: '😀 Very happy',
                value: '2'
            },
            {
                optionText: '😊 Somewhat happy',
                value: '3'
            },
            {
                optionText: '😏 A little happy',
                value: '4'
            },
            {
                optionText: '😐 Neutral',
                value: '5'
            },
            {
                optionText: '😑 A little unhappy',
                value: '6'
            },
            {
                optionText: '😒 Somewhat unhappy',
                value: '7'
            },
            {
                optionText: '😣 Very unhappy',
                value: '8'
            },
            {
                optionText: '😭 Extremely unhappy',
                value: '9'
            },
            {
                optionText: '🤮 The most unhappy',
                value: '10'
            }
        ]
    },
    {
        questionType: 'Info',
        questionText: 'That is all for the demo, tap finish to see your results!'
    },
];
