 import React, {Component, Fragment} from 'react';
import { Text, View, TextInput, Button, ScrollView, TouchableOpacity, Alert} from 'react-native';

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
            Alert.alert(
                'Delete all data?',
                'Are you sure you want to delete all user data?',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            SaveData.deleteAllFiles();
                            alert("Deleted All Files");
                            this.props.navigation.navigate('NewUser');
                        }
                    },
                    {
                        text: 'Cancel',
                        onPress: () => {
                            alert("Files not deleted");
                        },
                        style: 'cancel',
                    },
                ],
                { cancelable: false }
            );
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
            <View style={styles.background}>
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
                            style={styles.button}
                            onPress={() => this.deleteAllFiles()}
                        >
                            <Text style={styles.buttonTextColour}> Delete All Files </Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.elementPadding}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.sendEmail()}>
                            <Text style={styles.buttonTextColour}> Send Email </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        )
    }
}
