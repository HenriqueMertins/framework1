import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        color: '#333',
        marginBottom: 40,
    },
    input: {
        width: 250,
        height: 40,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: '#333',
    },
    alertText: {
        color: 'red',
        marginBottom: 12,
        textAlign: 'center',
    },
});
