import { StatusBar, Text, StyleSheet, View} from "react-native";
import React from "react";


export default function ({route}){
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <View style={{flex: 1,backgroundColor: '#ffffff',width:'100%'}}><Text style ={styles.title}>{route.params.title}</Text></View>
            <View style={{flex: 7,backgroundColor: '#111111', width:'100%',borderTopEndRadius:44,borderTopStartRadius:44 }}>

                <Text style ={styles.text}>{route.params.text}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title:{
        fontSize:24,
        paddingLeft:40,
        paddingTop: 20,
        color:'#111111'
    },
    text:{
        paddingTop:30,
        paddingLeft:30,
        fontSize:12,
        color:'#fff'
    },
})