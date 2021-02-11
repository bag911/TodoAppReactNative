import React , {useState} from "react";
import {StyleSheet, Text, View, ScrollView,TouchableOpacity} from 'react-native';
import {Add} from "../scr/Add";
import { StatusBar } from 'react-native'
import {NavigationContainer,useFocusEffect} from '@react-navigation/native'

export default function Lists({route,navigation}) {

    console.log(route.params.token)
    const [dataTodo,setData] = useState([]);
    const url = 'http://ec2-3-15-165-98.us-east-2.compute.amazonaws.com/api/todo_items/'
    let token=route.params.token;
    let kk =[];
    let ss =[];

    useFocusEffect(React.useCallback(()=>{
        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `token ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(json => {
                ss = json;
                console.log(ss);
                addTodo(ss);
            });
    },[])
    );



    const addTodo = (data) =>{
        setData((dataTodo)=> dataTodo = data.slice()
        )
    }

    console.log(token)
    const sendDeal=(title,text)=>{

        // fetch(url).then(response => {var kk = response.json()})
        //     .then(json => console.log(json));

        let data = {title, text,owner:'max'}

        fetch(url, {
            method: 'POST',
            headers: {
                Authorization:`token ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(r=>r.json()).then(json=>console.log(json));

        setTimeout(()=>{
            fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `token ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(json => {
                    kk = json;
                    console.log(kk);
                    addTodo(kk);
                });
        },2000)

    }
    console.log(dataTodo)
    return (
            <View style={{flex: 1,paddingTop: 10, backgroundColor: '#111111'}}>
                <StatusBar backgroundColor='#111111' barStyle='light-content' />
                <Add onSubmit = {sendDeal}/>

                <ScrollView style={{paddingHorizontal:30, marginBottom:10}}>
                    {dataTodo.map(dataKK=>(
                        <View  style={styles.listNavigation} key = {dataKK.id.toString()}>
                            <TouchableOpacity onPress={
                                ()=>navigation.navigate('Details',dataKK)
                            }
                                              style={{width: 400,alignItems:'center'}}
                            >
                                <View style={styles.lists} >
                                    <Text style = {styles.textList}>{dataKK.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    listNavigation:{
        paddingTop:10,
        alignItems:'center'
    },
    lists:{
        height:50,
        backgroundColor: '#2b2b2c',
        borderRadius:5,
        width:'80%',
        alignItems:'center',
        justifyContent:'center'

    },
    textList:{
        color:'#ffffff',
        fontSize:20,
        fontWeight:'bold'
    }

});