 import React, {Component, Fragment} from 'react';
import { Text, View, TextInput, Button, ScrollView} from 'react-native';

import styles from './Styles'
import styles1 from '../../resources/Styles'
import SaveData from '../../resources/SaveData/SaveData';
import SendData from '../../resources/SendData/SendData';

export default class ResearcherScreen extends Component {

    static navigationOptions = () => {
        return {
            headerStyle: styles1.headerStyle,
            headerTintColor: 'black',
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
            <View style={styles1.background}>
                <TextInput
                    placeholder="Please Type in Admin Password First"
                    style = {styles.input}
                    secureTextEntry={true}
                    onChangeText={this.handlePassword}
                />

                <Button 
                    style={styles1.buttonContainer}
                    onPress={() => this.deleteAllFiles()}
                    title="Delete All Files"
                />

                <Button
                    style={styles1.buttonContainer}
                    onPress={() => this.deleteAllFiles()}
                    title="Send Data"
                />
            </View>
        )
    }
}
