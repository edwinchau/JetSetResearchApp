import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity} from 'react-native';
import moment from 'moment';
import 'moment-timezone';
import * as FileSystem from "expo-file-system";

import styles from '../resources/Styles'

import { flightData } from '../resources/FlightData';

let userSave = {};

export default class HomeScreen extends Component {

    static navigationOptions = () => {
        return {
            headerStyle: styles.headerStyle,
            headerTintColor: 'black',
            headerTitle: 'JetSet',
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center'
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

        // SURVEY BUTTONS
        let survey;

        // Questions displayed in flight
        if (flightStart !== -1 && this.state.time.isBetween(flightStart, flightEnd)) {
            survey = (<Fragment>
                <View style={styles.homeButtonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Survey', { survey: 'FlightBreakfastQuestions' })}
                    >
                        <Text style={[styles.buttonTextColour, {textAlign: 'center', fontSize: 17}]}> BREAKFAST DURING </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.homeButtonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Survey', { survey: 'FlightLunchQuestions' })}
                    >
                        <Text style={[styles.buttonTextColour, {textAlign: 'center', fontSize: 17}]}> LUNCH DURING </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.homeButtonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Survey', { survey: 'FlightDinnerQuestions' })}
                    >
                        <Text style={[styles.buttonTextColour, {textAlign: 'center', fontSize: 17}]}> DINNER DURING </Text>
                    </TouchableOpacity>
                </View>
            </Fragment>)
        } else {
            // Questions displayed outside of the flight timings
            survey = (<Fragment>
                <View style={styles.homeButtonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Survey', { survey: 'BreakfastQuestions' })}
                    >
                        <Text style={[styles.buttonTextColour, {textAlign: 'center', fontSize: 17}]}> BREAKFAST PRE/POST </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.homeButtonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Survey', { survey: 'LunchQuestions' })}
                    >
                        <Text style={[styles.buttonTextColour, {textAlign: 'center', fontSize: 17}]}> LUNCH PRE/POST </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.homeButtonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Survey', { survey: 'DinnerQuestions' })}
                    >
                        <Text style={[styles.buttonTextColour, {textAlign: 'center', fontSize: 17}]}> DINNER PRE/POST </Text>
                    </TouchableOpacity>
                </View>
            </Fragment>)
        }

        return (

            <View style={styles.background}>
                <Image style={styles.usydlogo} source={require('../../assets/usydlogo.png')}/>
                <Text>
                    <Text style={{fontWeight: "bold"}}>Current Date: </Text>
                    {this.state.time.format('MMMM Do YYYY')}
                </Text>
                <Text>
                    <Text style={{fontWeight: "bold"}}>Current Time: </Text>
                    {this.state.time.format('h:mm:ss a')}
                </Text>

                {survey}

                <View style={styles.homeButtonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ResearcherPage')}
                    >
                        <Text style={[styles.buttonTextColour, {textAlign: 'center', fontSize: 17}]}> RESEARCHER MENU </Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }
}
