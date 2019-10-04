import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    input: {
        height: 40, borderColor: 'gray', borderWidth: 1
    },
    button: {
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 1,
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',        
    }
});

module.exports = styles;
