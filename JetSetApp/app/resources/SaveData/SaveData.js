import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import * as FileSystem from 'expo-file-system';

/**
 * This class primarily serves to handle files within the phone system so that results can be stored
 * This class extends the Component class from the 'react' library and is only done for debugging purposes
 * 
 * Note: This JS File is very broken, as all methods that have promises do not return the value as expected. 
 * The core functionality itself works except the functions that is supposed to return something i.e. viewFile and displayFile.
 * This has been replaced by using console.log to display the returned values that it is meant to return instead...
 */
class SaveData extends Component {

    // Debugger variables
    state = {
        Content: '',
        Filename: ''
    }

    /**
     * Set the value of content to the text
     * @param text the new value of Content
     * @returns Nothing
     */
    handleContent = (text) => {
        this.setState({ Content: text })
    }

    /**
     * Set the value of content to the text
     * @param text the new value of Filename
     * @returns Nothing
     */
    handleFilename = (text) => {
        this.setState({ Filename: text })
    }

    /**
     * Given an existing file name in the system, will append some text to that file
     * @param text
     * @param filename
     * @returns true if the append was a success otherwise false
     */
    static appendToFile = (text, filename) => {

        // Get the file location
        const fileLocation = FileSystem.documentDirectory + filename;

        // Get the file info
        const fileInfo = FileSystem.getInfoAsync(fileLocation);

        fileInfo.then(
            function(result) {
                let exists = result.exists;
                if (exists == true) {

                    // Get the current value
                    const currentValue = FileSystem.readAsStringAsync(fileLocation);

                    currentValue.then(

                        // If file is able to be read
                        function(result) {
                            let newValue = result + text
                            FileSystem.writeAsStringAsync(fileLocation, newValue);
                            console.log("Append to File: Success");
                            return true;
                        },

                        // File unable to be read
                        function(err) {
                            console.log(err);
                        }
                    )
                } else {
                    console.log("Unable to find the file: " + fileLocation);
                }
            },
            function(err) {
                console.log(err);
            }
        )
        return false;
    }

    /**
     * Given a filename, will save some text to that file with the name of filename.
     * If a file exists, then the file will be deleted and rewritten with only the text
     *
     * @param text
     * @param filename
     * @returns true if saving to the file was a success otherwise false
     */
    static saveNewFile = (text, filename) => {

        // Get file location
        const fileLocation = FileSystem.documentDirectory + filename;

        // Get file info
        const fileInfo = FileSystem.getInfoAsync(fileLocation);
        fileInfo.then(
            function(result) {

                // Write to the file
                const confirmation = FileSystem.writeAsStringAsync(fileLocation, text);
                confirmation.then(

                    // Confirmation success
                    function(result) {
                        console.log("Saved new file called "+ filename);
                        return true;
                    },

                    // Writing to file failed
                    function(err) {
                        console.log("Save new file error: " + err);
                    }
                )
            }, function(err) {
                console.log(err);
            }
        );
        return false;
    }

    /**
     * Given an existing filename, the function will delete that file
     *
     * @param filename the filename to be deleted
     * @returns true if the deletion was a success, false otherwise
     */
    static deleteFile = (filename) => {

        // Get the file directory
        const fileDirectory = FileSystem.documentDirectory + filename;

        // Get the file information
        const fileInfo = FileSystem.getInfoAsync(fileDirectory);

        fileInfo.then(
            function (result) {
                let exists = result.exists;
                if (exists == true) {

                    // Delete the file
                    const deleteConfirm = FileSystem.deleteAsync(fileDirectory);
                    deleteConfirm.then(

                        // File deleted
                        function(result) {
                            console.log(filename + " has been deleted");
                            return true;
                        },

                        // File failed to delete
                        function(err) {
                            console.log(err);
                        }
                    )

                }
            },
            function (err) {
                console.log("File fetch error: " + err);
            }
        )
        return false;
    }

    /**
     * Given an existing filename, the function will return the value of those files
     *
     * @param filename
     * @returns the contents of the file, otherwise will return false if failed to get the file
     */
    static viewFile = async (filename) => {

        // Get file location
        const fileLocation = FileSystem.documentDirectory + filename;

        // Get the text from the file location
        const fileData = await FileSystem.readAsStringAsync(fileLocation).then(
            // Return the text
            function (result) {
                console.log(result);
                return result;
            },

            // Failed to retrieve the text
            function (err) {
                console.log(err);
                return false;
            }
        )

        return fileData
    }

    /**
     * Will return and display all files that exist on the phone's app directory
     *
     * @param Nothing
     * @returns the list of directory, False if an error occurred
     */
    static displayAllFiles = () => {

        // Get all the contents in the root directory of this app's file
        const directory = FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
        directory.then(
            // Return the app's file
            function(result) {
                console.log(result);
                return result;
            },
            // Failed to extract files from the root directory
            function(err){
                console.log(err);
            }
        )
        return false;
    }

    static saveSurveyResults = (fileSaveLocation, answers, surveyQuestions) => {

        const checkUser = FileSystem.readAsStringAsync(FileSystem.documentDirectory + fileSaveLocation).then(
            function (result) {
                let saveLine = result + "\n" + answers
                SaveData.saveNewFile(saveLine, fileSaveLocation);
            },
            function (err) {
                let saveLine = surveyQuestions + "\n" + answers;
                SaveData.saveNewFile(saveLine, fileSaveLocation);
            }
        )
    }

    static deleteAllFiles = () => {
        // Get all the contents in the root directory of this app's file
        const directory = FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
        directory.then(
            // Return the app's file
            function(result) {
                for (var i = 0; i < result.length; i++) {
                    let filename = result[i];
                    const fileDirectory = FileSystem.documentDirectory + filename;
                    const fileInfo = FileSystem.getInfoAsync(fileDirectory);

                    fileInfo.then(
                        function (result) {
                            let exists = result.exists;
                            if (exists == true) {
            
                                // Delete the file
                                const deleteConfirm = FileSystem.deleteAsync(fileDirectory);
                                
                                deleteConfirm.then(
            
                                    // File deleted
                                    function(result) {
                                        console.log(filename + " has been deleted");
                                        return true;
                                    },
            
                                    // File failed to delete
                                    function(err) {
                                        console.log(err);
                                    }
                                )
            
                            }
                        },
                        function (err) {
                            console.log("File fetch error: " + err);
                        }
                    )
                }
            },
            // Failed to extract files from the root directory
            function(err){
                console.log(err);
            }
        )
    }

    /**
     * The function which renders the debugging screen for this class
     */
    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Text"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleContent} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Filename"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleFilename} />

                <TouchableOpacity style={styles.submitButton}
                    onPress={() => this.saveNewFile(this.state.Content, this.state.Filename)
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitButton}
                    onPress={() => this.deleteFile(this.state.Filename)
                    }>
                    <Text style={styles.submitButtonText}> Delete </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitButton}
                    onPress={() => this.viewFile(this.state.Filename)
                    }>
                    <Text style={styles.submitButtonText}> View </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitButton}
                    onPress={() => this.displayAllFiles()
                    }>
                    <Text style={styles.submitButtonText}> Display All Files </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitButton}
                    onPress={() => this.appendToFile(this.state.Content, this.state.Filename)
                    }>
                    <Text style={styles.submitButtonText}> Append to File </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitButton}
                    onPress={() => this.deleteAllFiles()
                    }>
                    <Text style={styles.submitButtonText}> Delete All Files </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default SaveData

// Stylesheet design for the debugging screens
const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})
