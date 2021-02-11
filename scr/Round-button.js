import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, Button, View, Alert, TouchableOpacity} from "react-native";


export const RoundButton =({onConfirm})=> {
    const touchShit = () => {
        onConfirm()
    }

    return(
        <TouchableOpacity style = {styles.roundButton} onPress = {touchShit}>
            <View style={styles.backgroundButton}>
                <View></View>
                <View></View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

});
