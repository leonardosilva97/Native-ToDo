import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1A1A1A'
    },
    containerHeader:{
        backgroundColor: "#0d0d0d",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
        paddingBottom: 44,
        flexDirection: 'row'
    },
    contentInput: {
        flexDirection: 'row',
        paddingEnd: 14,
        paddingStart: 14,
        marginTop: -27,
        zIndex: 99
        
    },
    input:{
        flex: 1,
        height: 56,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color: '#fdfcfe',
        padding: 16,
        fontSize: 22,
        marginRight: 7
    },
    button:{
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor:'#4EA8DE',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCount:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginEnd: 14,
        marginStart: 14,
        marginTop: 26,
        borderBottomColor: '#dadada',
        borderBottomWidth: 0.5
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 23
    },
    create:{
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 10
    },
    finished:{
        color: '#8284FA',
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 10
    },
    number:{
        height: 30,
        width: 30,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    count:{
        color: '#fff',
        fontWeight: 'bold'

    },
    containerEmpty:{
        flex: 1,
        marginStart: 14,
        marginEnd: 14,
        alignItems: 'center',
        marginTop: 46
    },
    contentEmpty:{
        alignItems: 'center'
    },
    bold:{
        fontWeight: 'bold',
        color: '#6b6b6b',
        fontSize: 18,
        marginTop: 12
    },
    text:{
        color: '#6b6b6b',
        fontSize: 18,
    }
})