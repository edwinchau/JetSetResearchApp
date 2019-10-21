import React, { Component } from 'react';
import * as MailComposer from 'expo-mail-composer';
import * as FileSystem from 'expo-file-system';

class SendData extends Component {

    static sendDataEmail = () => {

        // Get all the contents in the root directory of this app's file
        const directory = FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
        directory.then(
            // Return the app's file
            function(result) {

                result.forEach(function(element, index){
                    result[index] = FileSystem.documentDirectory + result[index];
                });

                FileSystem.readAsStringAsync(FileSystem.documentDirectory + "NewUserQuestions.json").then(
                    function(result1) {

                        result1 = JSON.parse(result1)['userID']

                        let mailOptions =  {
                            recipients: ['cpc.qantas@sydney.edu.au'],
                            subject: 'JetSet Results UserID:' + result1,
                            attachments: result,
                        }

                        // Open email client
                        MailComposer.composeAsync(mailOptions);
                    }
                )

            },
            // Failed to extract files from the root directory
            function(err){
                console.log(err);
            }
        )
    }
}

export default SendData;
