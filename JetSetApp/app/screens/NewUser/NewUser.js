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
        const { navigation } = this.props;

        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <Button
                        onPress={() => navigation.navigate('Survey', { survey: 'NewUserQuestions' })}
                        title="New User"
                    />
                </View>
            </View>
        );
    }
}
