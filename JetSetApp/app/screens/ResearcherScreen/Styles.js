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
    },
    headerStyle: {
        backgroundColor: 'rgba(141,196,63,1)',
        height: 40,
        elevation: 5,
    },
});

module.exports = styles;
