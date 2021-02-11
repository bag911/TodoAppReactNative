import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, View, Alert, TouchableOpacity} from "react-native";



export const Add =(props)=> {
    const [titleValue,setTitleValue] = useState('');
    const [textValue,setTextValue] = useState('');

    const pressButton = () => {
        if (titleValue.trim() && textValue.trim()){
            props.onSubmit(titleValue,textValue);
            setTitleValue('');
            setTextValue('');
        }else Alert.alert('Deal cant be empty')
    }

    return(
        <View style={styles.container}>
            <View style={styles.childContainer}>
                <TextInput style={styles.input}
                           onChangeText = {setTitleValue}
                           value = {titleValue}
                           placeholder="Input title"
                           autoCorrect = {false}
                           autoCapitalize = 'none'
                />
                <TextInput style={styles.input}
                           multiline
                           onChangeText = {setTextValue}
                           value = {textValue}
                           placeholder="Input text"
                           autoCorrect = {false}
                           autoCapitalize = 'none'
                />
            </View>

            <TouchableOpacity onPress={pressButton} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
        paddingBottom:15

    },
    childContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
    },
    input:{
        padding:4,
        width:'100%',
        borderBottomColor:'#a0ff00',
        borderBottomWidth:2,
        fontSize:20,
        color:'#fff',
    },
    appButtonContainer: {
        top:12,
        justifyContent:'center',
        elevation: 8,
        backgroundColor: "#a0ff00",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    appButtonText: {
        fontSize: 24,
        color: "#000000",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }

});
