import React, { Component } from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from '../../resources/Styles'

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
                <View style={styles.elementPadding}>
                    <Image style={styles.usydlogo} source={require('../../../assets/usydlogo.png')}/>
                </View>

                <View style={styles.elementPadding}>
                    <Text style={{fontWeight: "bold", fontSize: 20}}>JetSet Survey App</Text>
                </View>

                <View style={styles.elementPadding}>
                    <TouchableOpacity
                        style={styles.adminButton}
                        onPress={() => navigation.navigate('Survey', { survey: 'NewUserQuestions' })}
                    >
                        <Text style={styles.buttonTextColour}> New Users </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
