import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar} from 'react-native';

export default function Reg(props) {
    // console.log(props.route)
    let kk = {};
    let ss = {};
    const urlSignIn = 'http://ec2-3-15-165-98.us-east-2.compute.amazonaws.com/api/token-auth/';
    const urlSignUp = 'http://ec2-3-15-165-98.us-east-2.compute.amazonaws.com/api/users/';

    const value={
        username:'',
        password:''
    }
    const pressHandlerSingIn=()=>{
        fetch(urlSignIn,{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(value)
        }).then(r=>r.json()).then(json=>kk=json)
        setTimeout(()=>{
        console.log("result", kk.token)

            if(kk.token!==undefined){
                props.navigation.navigate('Home',{token:kk.token});
        }},1000)
    }


    const pressHandlerSingUp=()=>{
        let kkvalue = value;
        fetch(urlSignUp,{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(kkvalue)
        }).then(r=>r.json()).then(json=> {
        kk = json
        })

        setTimeout(()=>{
            fetch(urlSignIn,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(kkvalue)
            }).then(r=>r.json()).then(json=>ss=json)
            setTimeout(()=>{
                console.log("result", ss)

                if(ss.token!==undefined){
                    props.navigation.navigate('Home',{token:ss.token});
                }},2000)
        },1000)
    }

    return(
        <View style ={styles.container}>

            <StatusBar backgroundColor='#111111' barStyle='light-content' />
            {/*<View style={{width: '100%'}}></View>*/}
            <TextInput style ={styles.input}
                       onChangeText = {(val)=>{value.username=val}}
                       placeholder="Input login"
                       autoCorrect = {false}
                       autoCapitalize = 'none'/>
            <TextInput secureTextEntry={true} style ={styles.input}
                       onChangeText = {(val)=>{value.password=val}}
                       placeholder="Input password"
                       autoCorrect = {false}
                       autoCapitalize = 'none'/>
            <TouchableOpacity onPress ={pressHandlerSingIn}>
                <View style={styles.button}>
                    <Text style ={styles.textButton}>Log In</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={pressHandlerSingUp}>
                <View style={styles.button}>
                    <Text style ={styles.textButton}>Sign Up</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#111111',
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        width:'90%',
        borderRadius:7,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        marginTop:0,
        color:'#b8ff00',
        fontSize:20,
        marginBottom:20,
        textAlign: 'left',
        paddingLeft:7,

    },
    button:{
        height:40,
        width: 370,
        borderRadius: 12,
        backgroundColor:'#2b2b2c',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:15,
    },
    textButton:{
        fontSize: 20,
        color:'#fff'
    }

})
