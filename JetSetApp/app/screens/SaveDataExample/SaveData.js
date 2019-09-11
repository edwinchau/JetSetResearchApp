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
                <TouchableOpacity onPress={this.SaveData}>
                    <Text>Click me to save data</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.displayData}>
                    <Text>Click me to display data</Text>
                </TouchableOpacity>

            </View>
        );
    }

    saveData() {
        Let user = 'John Doe';
        AsyncStorage.setItem('user', user);
    }

    displayData = async () => {
        try {
            Let user = await AsyncStorage.getItem('user');
            alert(user);
        }
        catch(error) {
            alert(error);
        }
    }
}

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// export default class SaveData extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Hello, world!</Text>
//       </View>
//     );
//   }
// }
