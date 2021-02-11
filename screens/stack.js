import React from 'react';
import Lists from "./Lists";
import Details from "./Details";
import {createStackNavigator} from "@react-navigation/stack";



const Stack = createStackNavigator();


export default function Apb({route}) {

    return (

            <Stack.Navigator  initialRouteName="List" >
                <Stack.Screen name="List" component={Lists} options={optionScreenList} initialParams={{ token: route.params.token}} />
                <Stack.Screen name='Details' component={Details} options={optionScreenList2}/>
            </Stack.Navigator>

    );
}


const optionScreenList ={
    headerShown: false,
    headerStyle: {
        backgroundColor: '#111111',
        elevation: 0, //for android
        shadowOpacity: 0, //for ios
        borderBottomWidth: 0, //for ios
    },
    headerTintColor: '#fff',
};

const optionScreenList2 ={
    headerStyle: {
        backgroundColor: '#fff',
        elevation: 0, //for android
        shadowOpacity: 0, //for ios
        borderBottomWidth: 0, //for ios
    },
    headerTintColor: '#111111',
};
