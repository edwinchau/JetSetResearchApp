import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import styles from './Styles'
import SaveData from '../../resources/SaveData/SaveData';

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

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.background}>
                <View style={styles.container}>
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
