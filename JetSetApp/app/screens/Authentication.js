import React, { Component } from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import * as FileSystem from "expo-file-system";

styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    headerStyle: {
        backgroundColor: 'rgba(106,177,135,1)',
        height: 40,
        elevation: 5,
    },
});

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
