import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';

import styles from './Styles'
import SaveData from '../../resources/SaveData/SaveData';
import SendData from '../../resources/SendData/SendData';

export default class ResearcherScreen extends Component {

    static navigationOptions = () => {
        return {
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitle: 'Researcher Menu',
            headerTitleStyle: {
                flex: 1,
            }
        };
    };


    state = {
        typedPassword: '',
        adminPassword: 'abc123'
    };

    handlePassword = (text) => {
        this.setState({typedPassword: text});
    }

    checkPassword = () => {
        if (this.state.adminPassword !== this.state.typedPassword) {
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

    render() {
        return (
            <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <View style={styles.container}>
                <TextInput
                    placeholder="Please Type in Admin Password First"
                    style = {styles.input}
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
            </View>
            </ScrollView>
        )
    }
}
