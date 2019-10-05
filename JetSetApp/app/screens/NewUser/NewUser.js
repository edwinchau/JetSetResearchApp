import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import styles from './Styles'

export default class NewUser extends Component {
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
                        onPress={() => navigate('Survey', { survey: 'NewUserQuestions' })}
                        title="New User"
                    />
                    <Button
                        onPress={() => navigate('ResearcherPage')}
                        title="Admin Page"
                    />
                </View>
            </View>
        );
    }
}
