import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: 360,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333333',
        marginBottom: 10,
        borderRadius: 8,
        height: 67,
    },
    check:{
        width: 30,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    delete:{
        width: 40,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    todo:{
        height: '100%',
        flex: 1,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#fff',
        fontSize: 14
    }
})