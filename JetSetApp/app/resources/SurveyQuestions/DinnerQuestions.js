export const survey = [
    {
        questionType: 'TimeInput',
        questionText: 'What time did you have dinner',
        questionId: 'mealTime',
        optional: false,
        placeholderText: 'Enter meal time',
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'How many cups of caffeinated beverages have you consumed since lunch? Consider cups of tea, coffee, colas, and energy drinks. 1 cup = 250 mL = 8 fluid ounces.',
        questionId: 'numberCaffeine',
        optional: false,
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
            'How many alcoholic beverages have you consumed since lunch? 1 beverage = 175 mL wine = 30mL spirits = 300 mL beer = 1/2 pint beer.',
        questionId: 'numberAlcohol',
        optional: false,
        options: [
            {
                optionText: 'None',
                value: '0'
            },
            {
                optionText: '1 beverage',
                value: '1'
            },
            {
                optionText: '2 beverages',
                value: '2'
            },
            {
                optionText: '3 beverages',
                value: '3'
            },
            {
                optionText: '4 beverages',
                value: '4'
            },
            {
                optionText: '5 or more beverages',
                value: '5'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Have you had a nap since lunch?',
        questionId: 'napTaken',
        optional: false,
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
        optional: false,
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
        questionType: 'TimeInput',
        questionText: 'Did you do any moderate to vigorous activity today (e.g. run, walk, cycle, gym session)? If yes, please enter the time you did this activity:',
        questionId: 'activityTime',
        optional: true,
        placeholderText: 'Enter activity time',
    },
    {
        questionType: 'SelectionGroup',
        questionText: 'If yes, please enter the duration of physical activity:',
        questionId: 'activityDuraction',
        optional: false,
        options: [
          {
              optionText: 'No activity',
              value: 'No activity'
          },
          {
              optionText: '< 30 min ',
              value: 'Under 30 min'
          },
          {
              optionText: '30 min - 1 hour',
              value: '30 min - 1 hour'
          },
          {
              optionText: '2 hours',
              value: '2 hours'
          },
          {
              optionText: '3 hours',
              value: '3 hours'
          },
          {
              optionText: '4 + hours',
              value: '4 + hours'
          }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Please select the response that represents your sleepiness level during the last five minutes',
        optional: false,
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
        optional: false,
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
            optional: false,
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
        optional: false,
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
            'Please select the number that represents your current mood',
        questionId: 'moodScale',
        optional: false,
        options: [
            {
                optionText: '1. 😍',
                value: '1'
            },
            {
                optionText: '2. 😀',
                value: '2'
            },
            {
                optionText: '3. 😐',
                value: '3'
            },
            {
                optionText: '4. 😒',
                value: '4'
            },
            {
                optionText: '5. 😣',
                value: '5'
            }
        ]
    },
    {
        questionType: 'Info',
        questionText: 'Thank you for completing the Dinner Survey! Your answers have been logged. Please complete the PVT test if you have not completed it already'
    },
];
