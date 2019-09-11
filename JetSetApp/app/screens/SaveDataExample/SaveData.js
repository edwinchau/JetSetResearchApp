import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

export default class SaveData extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.saveData}>
                    <Text>Click me to save data</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.displayData}>
                    <Text>Click me to view data</Text>
                </TouchableOpacity>
            </View>
        );
    }

    saveData() {
        // npm install react-native-fs --save
        // var RNFS = require('react-native-fs');
        // var path = RNFS.DocumentDirectoryPath + '/test.txt';

        object = {
            name: "John Doe",
            email: "test@gmail.com",
            city: "new city"
        }
        AsyncStorage.setItem('user', JSON.stringify(object));
    }

    displayData = async () => {
        try {
            user = await AsyncStorage.getItem('user');
            parsed = JSON.parse(user)
            alert("User is " + user)
        } 
        catch(error) {
            alert(error)
        }
    }
    // udshfiusdiuydfiu
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})