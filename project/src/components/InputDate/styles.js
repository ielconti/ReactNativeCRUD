import { Dimensions, StyleSheet } from 'react-native';

export const Styles = (editable) => StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
    },
    label:{
        left: 22,
        color: '#777',
        fontSize: 14
    },
    input: {
        height: 50,
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        marginHorizontal: 20,
        borderRadius: 4,
        fontSize: 18,
        borderColor: '#ccc',
        borderWidth: 1,
        color: editable === true ? '#111' : '#777',
        paddingTop: 12
    }
});