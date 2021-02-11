import React from 'react';
import { NavigationContainer,DarkTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons} from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



import stack from "./screens/stack";
import Reg from "./screens/Reg";

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {

     return (
        <NavigationContainer >
            <Tab.Navigator initialRouteName="Profile"
                           tabBarOptions={{
                               activeTintColor: "#b8ff00",
                               inactiveTintColor: "#bababa",
                           }}
                           activeColor="#b8ff00"
                           inactiveColor="#bababa"
                           barStyle={{ backgroundColor: '#111111' }}
            >
                <Tab.Screen name="Home" component={stack} options={optionScreen1} />
                <Tab.Screen name='Profile' component={Reg} options={optionScreen2} />

            </Tab.Navigator>
        </NavigationContainer>
  );
}


const optionScreen1 ={
    tabBarLabel: 'Lists',
    tabBarColor: '#ffffff',
    tabBarIcon: ({ color }) => (
        <MaterialIcons name="list" color={color} size={26} />
    ),
};

const optionScreen2 ={
    tabBarLabel: 'Profile',
    tabBarIcon: ({ color }) => (
        <MaterialIcons name="person" color={color} size={26} />
    ),
};