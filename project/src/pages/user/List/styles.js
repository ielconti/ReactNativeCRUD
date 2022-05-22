import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    title:{
        fontSize: 16,
        color: '#222'
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    optionTitle: {
        fontSize: 16,
        color: '#000'
    },
    optionDescription: {
        fontSize: 12,
        color: '#777',
        marginTop: 2
    },
    avatar: {
        color: '#fff',
        alignSelf: 'center'
    },
    avatarBg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#022280',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 2,
        borderColor: '#022280'
    },
    iconR: {
        color: '#000',
        alignSelf: 'center'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        // backgroundColor: '#003fed',
        backgroundColor: '#022280',
        color: '#fff'
    },
    fabIcon: {
        backgroundColor: '#022280',
        color: '#fff'
    },
});