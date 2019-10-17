import React, { Component } from 'react';
import {
    ActivityIndicator,
    StatusBar,
    Text,
    StyleSheet,
    View,
    Button
} from 'react-native';

import styles from './Styles'
import SaveData from '../../resources/SaveData';
import * as FileSystem from "expo-file-system";

export default class Authentication extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitle: 'JetSet',
            headerTitleStyle: {
                flex: 1,
            }
        };
    };

    componentDidMount() {
        this.checkForUserData();
    }

    checkForUserData = async () => {

        const checkUser = await FileSystem.getInfoAsync(FileSystem.documentDirectory + "NewUserQuestions.json").then(
            function (result) {
                return result.exists;
            },
            function (err) {
                console.log("File fetch error: " + err);
                return false;
            }
        )

        if (checkUser == true) {
            this.props.navigation.navigate('AppStack');
        } else {
            this.props.navigation.navigate('NewUserStack');
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.background}>
                <View>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                </View>
            </View>
        );
    }
}
