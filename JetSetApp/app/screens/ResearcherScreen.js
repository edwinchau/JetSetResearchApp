 import React, {Component, Fragment} from 'react';
import { Text, View, TextInput, Button, ScrollView, TouchableOpacity, TouchableElement} from 'react-native';

import styles from '../resources/Styles'
import SaveData from '../resources/SaveData';
import SendData from '../resources/SendData';

export default class ResearcherScreen extends Component {

    static navigationOptions = () => {
        return {
            headerStyle: styles.headerStyle,
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
            <View style={styles.backgroundAdmin}>
                <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>

                    <View style = {styles.elementPadding}>
                        <TextInput
                            placeholder=" Please Type in Admin Password First "
                            style = {styles.passwordTextbox}
                            secureTextEntry={true}
                            onChangeText={this.handlePassword}
                        />
                    </View>

                    <View style = {styles.elementPadding}>
                        <TouchableOpacity
                            style={styles.adminButton}
                            onPress={() => this.deleteAllFiles()}
                        >
                            <Text style={styles.buttonTextColour}> Delete All Files </Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.elementPadding}>
                        <TouchableOpacity
                        style={styles.adminButton}
                        onPress={() => this.sendEmail()}>
                            <Text style={styles.buttonTextColour}> Send Email </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        )
    }
}
