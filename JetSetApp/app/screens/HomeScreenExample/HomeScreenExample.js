import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import moment from 'moment';

import styles from './Styles'
import SaveData from '../../resources/SaveData/SaveData';
import SendData from '../../resources/SendData/SendData';

export default class HomeScreenExample extends Component {
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

        let survey;

        if (parseInt(moment(this.state.time).format('ss')) % 2 === 0) {
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
            </View>
        );
    }
}
