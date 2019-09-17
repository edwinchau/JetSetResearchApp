import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import * as FileSystem from 'expo-file-system';
import { HeaderStyleInterpolator } from 'react-navigation';

class SaveData extends Component {
    state = {
        Content: '',
        Filename: ''
    }
    handleContent = (text) => {
        this.setState({ Content: text })
    }
    handleFilename = (text) => {
        this.setState({ Filename: text })
    }

    appendToFile = (text, filename) => {
        const fileLocation = FileSystem.documentDirectory + filename;
        const fileInfo = FileSystem.getInfoAsync(fileLocation);

        fileInfo.then(
            function(result) {
                let exists = result.exists;
                if (exists == true) {
                    const currentValue = FileSystem.readAsStringAsync(fileLocation);

                    currentValue.then(
                        function(result) {
                            let newValue = result + text 
                            FileSystem.writeAsStringAsync(fileLocation, newValue);   
                            console.log("Append to File: Success");
                        },
                        function(err) {
                            alert(err);
                        }
                    )
                } else {
                    alert("Unable to find the file");
                    console.log(fileLocation);
                }
            }, 
            function(err) {
                console.log(err);
            } 
        )
    }

    saveNewFile = (text, filename) => {
        const fileLocation = FileSystem.documentDirectory + filename;
        const fileInfo = FileSystem.getInfoAsync(fileLocation);
        fileInfo.then(
            function(result) {
                const confirmation = FileSystem.writeAsStringAsync(fileLocation, text);
                confirmation.then(
                    function(result) {
                        console.log("Saved new file called "+ filename);
                    },
                    function(err) {
                        console.log("Save new file error: " + err);
                    }
                )
            }, function(err) {
                console.log(err); // Error: "It broke"
            }
        );
    }

    deleteFile = (filename) => {
        const fileDirectory = FileSystem.documentDirectory + filename;
        const fileInfo = FileSystem.getInfoAsync(fileDirectory);

        fileInfo.then(
            function (result) {
                let exists = result.exists;
                if (exists == true) {
                    const deleteConfirm = FileSystem.deleteAsync(fileDirectory);
                    deleteConfirm.then(
                        function(result) {
                            alert(filename + " has been deleted");
                        }, 
                        function(err) {
                            alert(filename + " could not be deleted (perhaps it already has?): " + err);
                        }
                    )

                }
            },
            function (err) {
                console.log("File fetch error: " + err);
            }
        )

    }

    viewFile = (filename) => {
        const fileLocation = FileSystem.documentDirectory + filename;
        const fileInfo = FileSystem.getInfoAsync(fileLocation);
        
        fileInfo.then(
            function(result) {
                let exists = result.exists;
                if (exists == true) {
                    const value = FileSystem.readAsStringAsync(fileLocation);
                    value.then(
                        function(result) {
                            alert(result);
                            return result;
                        }, 
                        function(err) {
                            alert("File " + filename + " does not exist: " + err);
                        }
                    )
                } else {
                    alert("File: " + filename + " does not exist");
                }
            }
        )
    }

    displayAllFiles = () => {
        const directory = FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
        directory.then(
            function(result) {
                alert(result);
                console.log(result);
                return result;
            }, 
            function(err){
                alert(err);
            }
        ) 
    }

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

            </View>
        )
    }
}
export default SaveData

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
