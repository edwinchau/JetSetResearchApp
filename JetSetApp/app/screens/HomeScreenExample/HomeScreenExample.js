import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import moment from 'moment';

import styles from './Styles'
import SaveData from '../../resources/SaveData/SaveData';
import SendData from '../../resources/SendData/SendData';
import * as FileSystem from "expo-file-system";

let globalResult = 1;

import { Notifications } from "expo";
import { Permissions } from "expo-permissions";

export default class HomeScreenExample extends Component {
    askPermissions = async () => {
        const { status: existingStatus } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== "granted") {
            return false;
        }
        return true;
    };

    scheduleNotification = async () => {
        let breakfastNotification = Notifications.scheduleLocalNotificationAsync(
            {
                title: "Breakfast survey and PVT reminder (1hr)",
                body: "Don't forget to fill in your breakfast survey and do the PVT test."
            },
            {
                repeat: "day",
                time: new Date().getTime() + 1000
                //unix epoch time for 9:00am in Sydney 1570080556
                //time: new Date().getTime() + 3600000
            }
        );
        console.log(breakfastNotification);
        let lunchNotification = Notifications.scheduleLocalNotificationAsync(
            {
                title: "Lunch survey and PVT reminder (7hrs)",
                body: "Don't forget to fill in your lunch survey and do the PVT test."
            },
            {
                repeat: "day",
                time: new Date().getTime() + 2000
                //time: new Date().getTime() + 25200000
            }
        );
        console.log(lunchNotification);
        let dinnerNotification = Notifications.scheduleLocalNotificationAsync(
            {
                title: "Dinner survey and PVT reminder (13hrs)",
                body: "Don't forget to fill in your dinner survey and do the PVT test."
            },
            {
                repeat: "day",
                time: new Date().getTime() + 2000
                //time: new Date().getTime() + 46800000
            }
        );
        console.log(dinnerNotification);
    };

    scheduleFlightNotification = async () => {
        let firstMealNotification = Notifications.scheduleLocalNotificationAsync(
            {
                title: "ON FLIGHT: First meal survey reminder",
                body: "Don't forget to record when you ate your first meal!"
            },
            {
                time: new Date().getTime() + 1000
            }
        );
        console.log(firstMealNotification);
        let secondMealNotification = Notifications.scheduleLocalNotificationAsync(
            {
                title: "ON FLIGHT: Second meal survey reminder",
                body: "Don't forget to record when you ate your second meal!"
            },
            {
                time: new Date().getTime() + 2000
            }
        );
        console.log(secondMealNotification);
    };

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

    constructor(props) {
        super(props);
        this.state = { time: Date.now() };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { navigate } = this.props.navigation;

        FileSystem.readAsStringAsync(FileSystem.documentDirectory + "NewUserQuestions.json").then(
            function (result) {
                result = JSON.parse(result);
                globalResult = parseInt(result['swapSecondsTesting']);
            },
            function (err) {
            }
        )

        let survey;

        if (parseInt(moment(this.state.time).format('ss')) % globalResult === 0) {
            survey = (<Fragment>
                <Button
                    onPress={() => navigate('Survey', { survey: 'BreakfastQuestions' })}
                    title="Breakfast"
                />

                <Button
                    onPress={() => navigate('Survey', { survey: 'LunchQuestions' })}
                    title="Lunch"
                />

                <Button
                    onPress={() => navigate('Survey', { survey: 'DinnerQuestions' })}
                    title="Dinner"
                />
            </Fragment>)
        } else {
            survey = (<Fragment>
                <Button
                    onPress={() => navigate('Survey', { survey: 'BreakfastQuestions' })}
                    title="Breakfast 1"
                />

                <Button
                    onPress={() => navigate('Survey', { survey: 'LunchQuestions' })}
                    title="Lunch 1"
                />

                <Button
                    onPress={() => navigate('Survey', { survey: 'DinnerQuestions' })}
                    title="Dinner 1"
                />
            </Fragment>)
        }

        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <Text>Time: {moment(this.state.time).format()}</Text>
                </View>
                <View style={styles.container}>

                    {survey}

                </View>
                <View style={styles.container}>
                    <Button
                        onPress={() => SendData.sendDataEmail()}
                        title="Send Data"
                    />
                </View>
                <View style={styles.container}>
                    <Button
                        onPress={() => navigate('ResearcherPage')}
                        title="Admin Page"
                    />
                </View>
                <View style={styles.container}>
                    <Text>Testing Features</Text>

                    <Button
                        onPress={() => SaveData.displayAllFiles()}
                        title="View Files"
                    />

                    <Button
                        onPress={() => SaveData.deleteFile("NewUserQuestions.json")}
                        title="Delete User Save"
                    />
                </View>
                <View style={styles.container}>
                    <Button
                        title="Please accept notifications permissions"
                        onPress={() => this.askPermissions()}
                    />
                </View>
                <View style={styles.container}>
                    <Button
                        title="Start scheduled notifications"
                        onPress={() => this.scheduleNotification()}
                    />
                </View>
                <View style={styles.container}>
                    <Button
                        title="Start during flight notifications"
                        onPress={() => this.scheduleFlightNotification()}
                    />
                </View>
                <View style={styles.container}>
                    <Button
                        title="Cancel all notifications"
                        onPress={() => Notifications.cancelAllScheduledNotificationsAsync()}
                    />
                </View>
            </View>
        );
    }
}
