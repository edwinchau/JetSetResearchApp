import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import moment from 'moment';
import 'moment-timezone';
import * as FileSystem from "expo-file-system";

import styles from './Styles'
import SaveData from '../../resources/SaveData/SaveData';
import SendData from '../../resources/SendData/SendData';
import { flightData } from '../../resources/FlightData/FlightData';

let userSave = {};

import { Notifications } from "expo";

export default class HomeScreenExample extends Component {
    askPermissions = async () => {
        alert("You need to enable notifications for this app in settings.");
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
                // 1 hr
                time: new Date().getTime() + 3600
            }
        );
        let lunchNotification = Notifications.scheduleLocalNotificationAsync(
            {
                title: "Lunch survey and PVT reminder (7hrs)",
                body: "Don't forget to fill in your lunch survey and do the PVT test."
            },
            {
                repeat: "day",
                // 7 hrs
                time: new Date().getTime() + 25200
            }
        );
        let dinnerNotification = Notifications.scheduleLocalNotificationAsync(
            {
                title: "Dinner survey and PVT reminder (13hrs)",
                body: "Don't forget to fill in your dinner survey and do the PVT test."
            },
            {
                repeat: "day",
                // 13 hours
                time: new Date().getTime() + 46800
            }
        );
    };

    scheduleFlightNotification = async () => {
        let firstMealNotification = Notifications.scheduleLocalNotificationAsync(
            {
                title: "ON FLIGHT: First meal survey reminder",
                body: "Don't forget to record when you ate your first meal!"
            },
            {
                // 1 hour since departure
                time: new Date().getTime() + 3600
            }
        );
        let secondMealNotification = Notifications.scheduleLocalNotificationAsync(
            {
                title: "ON FLIGHT: Second meal survey reminder",
                body: "Don't forget to record when you ate your second meal!"
            },
            {
                // 5 hours since departure
                time: new Date().getTime() + 18000
            }
        );
        let thirdMealNotification = Notifications.scheduleLocalNotificationAsync(
            {
                title: "ON FLIGHT: Second meal survey reminder",
                body: "Don't forget to record when you ate your second meal!"
            },
            {
                // 16 hours since departure
                time: new Date().getTime() + 57600
            }
        );
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
        this.state = { time: moment() };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: moment() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { navigation } = this.props;

        FileSystem.readAsStringAsync(FileSystem.documentDirectory + "NewUserQuestions.json").then(
            function (result) {
                userSave = JSON.parse(result);
            },
            function (err) {
            }
        )

        let flightStart  = -1;
        let flightEnd = -1;

        try {
            let userFlightCode = userSave['flightDetails']['value'];
            let flightDate = userSave['dateOfFlight'];

            let singleFlightData;

            flightData.forEach((flight) => {
                if (flight['flightCode'] === userFlightCode) {
                    singleFlightData = flight;
                }
            })

            let utcOffset = singleFlightData['flightTimeUTCOffset'];
            let flightDuration = singleFlightData['flightLength'] + singleFlightData['flightLengthOffset'];
            let flightDateTime = flightDate + " " + singleFlightData['flightTimeStart']

            flightStart = moment(flightDateTime, 'DD/MM/YYYY hh:mm A').utcOffset(utcOffset, true);
            flightEnd = flightStart.clone().add(flightDuration, 'minutes');

        } catch (e) {
        }

        let survey;

        if (flightStart !== -1 && this.state.time.isBetween(flightStart, flightEnd)) {
            survey = (<Fragment>
                <View style={styles.breakfast}>
                <Button color="#ffffff"
                    onPress={() => navigation.navigate('Survey', { survey: 'BreakfastQuestions' })}
                    title="Breakfast During"
                />
                </View>
                <View style={styles.lunch}>
                <Button color="#ffffff"
                    onPress={() => navigation.navigate('Survey', { survey: 'LunchQuestions' })}
                    title="Lunch During"
                />
                </View>
                <View style={styles.dinner}>
                <Button color="#ffffff"
                    onPress={() => navigation.navigate('Survey', { survey: 'DinnerQuestions' })}
                    title="Dinner During"
                />
                </View>
            </Fragment>)
        } else {
            survey = (<Fragment>
                <View style={styles.breakfast}>
                <Button color="#ffffff"
                    onPress={() => navigation.navigate('Survey', { survey: 'BreakfastQuestions' })}
                    title="Breakfast Pre/Post"
                />
                </View>
                <View style={styles.lunch}>
                <Button color="#ffffff"
                    onPress={() => navigation.navigate('Survey', { survey: 'LunchQuestions' })}
                    title="Lunch Pre/Post"
                />
                </View>
                <View style={styles.dinner}>
                <Button color="#ffffff"
                    onPress={() => navigation.navigate('Survey', { survey: 'DinnerQuestions' })}
                    title="Dinner Pre/Post"
                />
                </View>
            </Fragment>)
        }

        return (
            <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
                <View style={styles.background}>
                    <View style={styles.container}>
                        <Text>Time: {this.state.time.format('MMMM Do YYYY, h:mm:ss a')}</Text>
                    </View>
                        {survey}
                    <View style={styles.admin}>
                        <Button color="#ffffff"
                            onPress={() => navigation.navigate('ResearcherPage')}
                            title="Admin Page"
                        />
                    </View>
                    <View style={styles.container}>
                        <Text>Testing Features</Text>
                    </View>
                    <View style={styles.other}>
                        <Button color="#ffffff"
                                onPress={() => SendData.sendDataEmail()}
                                title="Send Data"
                        />
                        <Button color="#ffffff"
                            onPress={() => SaveData.displayAllFiles()}
                            title="View Files"
                        />
                        <Button color="#ffffff"
                            onPress={() => SaveData.deleteFile("NewUserQuestions.json")}
                            title="Delete User Save"
                        />
                        <Button color="#ffffff"
                            title="Notifications permission"
                            onPress={() => this.askPermissions()}
                        />
                        <Button color="#ffffff"
                            title="Start pre/post flight notifications"
                            onPress={() => this.scheduleNotification()}
                        />
                        <Button color="#ffffff"
                            title="Start during flight notifications"
                            onPress={() => this.scheduleFlightNotification()}
                        />
                        <Button color="#ffffff"
                            title="Cancel all notifications"
                            onPress={() => Notifications.cancelAllScheduledNotificationsAsync()}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}
