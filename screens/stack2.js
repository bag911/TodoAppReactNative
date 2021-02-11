import React from 'react';
import screen3 from "./screen3";
import Reg from "./Reg";

import {createStackNavigator} from "@react-navigation/stack";


const Stack = createStackNavigator();


export default function Abb() {
    return (

        <Stack.Navigator  initialRouteName="List" >
            <Stack.Screen name="Profile" component={screen3} options={optionScreenList} />
            <Stack.Screen name='Registration' component={Reg} options={optionScreenList}/>
        </Stack.Navigator>

    );
}


const optionScreenList ={
    headerStyle: {
        backgroundColor: '#111111',
        elevation: 0, //for android
        shadowOpacity: 0, //for ios
        borderBottomWidth: 0, //for ios
    },
    headerTintColor: '#fff',
};
