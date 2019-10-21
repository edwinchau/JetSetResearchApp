export const survey = [
  {
       questionType: 'TimeInput',
       questionText: 'What time did you go to sleep?',
       questionId: 'mealTime',
       optional: false,
       placeholderText: 'Enter meal time',
   },
   {
        questionType: 'TimeInput',
        questionText: 'What time did you wake up?',
        questionId: 'mealTime',
        optional: false,
        placeholderText: 'Enter meal time',
    },
   {
        questionType: 'TimeInput',
        questionText: 'What time did you eat breakfast',
        questionId: 'mealTime',
        optional: false,
        placeholderText: 'Enter meal time',
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'How many cups of caffeinated beverages have you consumed since the last survey? Consider cups of tea, coffee, colas, and energy drinks. 1 cup = 250 mL = 8 fluid ounces.',
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
            'Have you had a nap since previous survey',
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
        questionType: 'SelectionGroup',
        questionText:
            'Please select the number that represents your sleepiness level during the last five minutes',
        questionId: 'kssResult',
        optional: false,
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
        questionText: 'Did you do any mild exercise during the flight since the last survey? If yes, please select the activity type:',
        questionId: 'activityType',
        optional: false,
        options: [
          {
              optionText: 'Seated exercise',
              value: 'seated'
          },
          {
              optionText: 'Non-seated exercise',
              value: 'nonseated'
          },
          {
              optionText: 'Both seated and non seated exercise',
              value: 'both'
          },
          {
              optionText: 'No exercise',
              value: 'none'
          }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'While you are sitting do you have any pain in your..?',
        questionId: 'painLocation',
        optional: false,
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
        questionText: 'Thank you for completing the in flight Survey! Your answers have been logged. Please complete the PVT test if you have not completed it already. '
    },
];
