import React, { Component } from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from '../resources/Styles'
import {Notifications} from "expo";

export default class NewUser extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: styles.headerStyle,
            headerTintColor: 'black',
            headerTitle:"Home Page",
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center',
            }
        };
    };

    scheduleNotification = async () => {
        let breakfastNotification = await Notifications.scheduleLocalNotificationAsync(
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
        let lunchNotification = await Notifications.scheduleLocalNotificationAsync(
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
        let dinnerNotification = await Notifications.scheduleLocalNotificationAsync(
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
        let firstMealNotification = await Notifications.scheduleLocalNotificationAsync(
            {
                title: "ON FLIGHT: First meal survey reminder",
                body: "Don't forget to record when you ate your first meal!"
            },
            {
                // 1 hour since departure
                time: new Date().getTime() + 3600
            }
        );
        let secondMealNotification = await Notifications.scheduleLocalNotificationAsync(
            {
                title: "ON FLIGHT: Second meal survey reminder",
                body: "Don't forget to record when you ate your second meal!"
            },
            {
                // 5 hours since departure
                time: new Date().getTime() + 18000
            }
        );
        let thirdMealNotification = await Notifications.scheduleLocalNotificationAsync(
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

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.background}>
                <View style={styles.elementPadding}>
                    <Image style={styles.usydlogo} source={require('../../assets/usydlogo.png')}/>
                </View>
                <View style={styles.elementPadding}>
                    <Text style={styles.mainText}>JetSet Survey App</Text>
                </View>

                <View style={styles.elementPadding}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.scheduleNotification();
                            navigation.navigate('Survey', { survey: 'NewUserQuestions' });
                        }}
                    >
                        <Text style={styles.buttonText}> New User </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
