import React, { Component } from 'react';
import * as MailComposer from 'expo-mail-composer';
import * as FileSystem from 'expo-file-system';

function verifyResearcher() {

    let password = 'abc123';

    if (password === 'abc123') {
        return true;
    }

    return false;
}

class SendData extends Component {

    static sendDataEmail = () => {
        if (verifyResearcher() == true ) {
            // Get all the contents in the root directory of this app's file
            const directory = FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
            directory.then(
                // Return the app's file
                function(result) {

                    result.forEach(function(element, index){
                        result[index] = FileSystem.documentDirectory + result[index];
                    });

                    let mailOptions =  {
                        recipients: ['test@test.com'],
                        subject: 'JetSet Results',
                        attachments: result,
                    }

                    // Open email client
                    MailComposer.composeAsync(mailOptions);

                },
                // Failed to extract files from the root directory
                function(err){
                    console.log(err);
                }
            )
        } else {
            alert("Wrong Password");
        }

    }
}

export default SendData;
