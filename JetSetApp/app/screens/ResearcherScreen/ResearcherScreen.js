import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

import styles from './Styles'
import SaveData from '../../resources/SaveData/SaveData';
import SendData from '../../resources/SendData/SendData';

export default class ResearcherScreen extends Component {


    state = {
        typedPassword: '',
        thisPassword: 'abc123'
    };

    handlePassword = (text) => {
        this.setState({typedPassword: text});
    }

    checkPassword = () => {
        if (this.state.thisPassword !== this.state.typedPassword) {
            return false; 
        }
        return true;
    }

    deleteAllFiles = () => {
        if (this.checkPassword()) {
            SaveData.deleteAllFiles();
            alert("Deleted All Files");
        } else {
            alert("Incorrect password");
        }
    }

    sendEmail = () => {
        if (this.checkPassword()) {
            SendData.sendDataEmail();
        } else {
            alert("Incorrect password");
        }
    }

    prompt = () => {
        // const title = 'Please Enter The Admin Password';
        // const buttons = [
        //     { text: 'Cancel', type: 'cancel' },
        //     { text: 'Option A', onPress: () => this.setState({userSelection: 'Option A'}) },
        //     { text: 'Option B', onPress: () => this.setState({userSelection: 'Option B'}) }
        // ];
        // Alert.alert(title, message, buttons);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Please Type in Admin Password First"
                    secureTextEntry={true}
                    onChangeText={this.handlePassword}
                />
                <TouchableOpacity style={styles.button}
                    onPress={() => this.deleteAllFiles()
                    }>
                    <Text style={styles.submitButtonText}> Delete All Files </Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.button}
                    onPress={() => this.sendEmail()
                    }>
                    <Text style={styles.submitButtonText}> Send Data </Text>
                </TouchableOpacity>      
                <TouchableOpacity style={styles.button}
                    onPress={() => this.prompt()
                    }>
                    <Text style={styles.submitButtonText}> Prompt </Text>
                </TouchableOpacity>         
            </View>
        )
    }
}
