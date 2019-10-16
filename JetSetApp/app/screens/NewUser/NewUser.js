import React, { Component } from 'react';
import {Text, View, Button, Image} from 'react-native';

import styles from './Styles'

export default class NewUser extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: styles.headerStyle,
            headerTintColor: 'black',
            headerTitle:"Home Page",
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center'
            }
        };
    };

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.background}>
                <Image style={{width: 100, height: 100, }} source={require('../../../assets/usydlogo.png')}/>
                <Text style={{fontWeight: "bold"}}>JetSet Survey App</Text>
                <View style={styles.container}>
                    <Button color="black"
                        onPress={() => navigation.navigate('Survey', { survey: 'NewUserQuestions' })}
                        title="New User"
                    />
                </View>
            </View>
        );
    }
}
