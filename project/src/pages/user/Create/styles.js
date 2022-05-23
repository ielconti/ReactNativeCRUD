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
    delete:{
        color: '#dd0000',
        fontWeight: 'bold'
    },
    input: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    avatar: {
        alignSelf:'center'
    },
    avatarBg: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#022280'
    },
    imageOption: {
        width: 50, 
        height: 50, 
        backgroundColor: '#022280', 
        borderRadius: 5, 
        justifyContent: 'center'
    },
    imageOptionRemove: {
        width: 50, 
        height: 50, 
        backgroundColor: '#bb0000', 
        borderRadius: 5, 
        justifyContent: 'center'
    },
    button: {
        height: 50,
        borderRadius: 4,
        backgroundColor: '#022280',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50
    },
    btext: {
        color: '#fff',
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 5
    },
});