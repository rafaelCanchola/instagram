import * as React from 'react';
import {View, Text,} from 'react-native';
import AppLoading from "expo";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {useFonts} from "@use-expo/font";

import Login from '../screens/AuthScreens/Login'
import Signup from '../screens/AuthScreens/Signup'

const Stack = createStackNavigator();

export default function App(){
    let [fontsLoaded] = useFonts({
        'BilboSwashCaps': require('../assets/fonts/BilboSwashCaps-Regular.ttf')
    });

    if(!fontsLoaded){
        return <View/>
    }else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={'Login'} component={Login} options={{headerShown: false}}></Stack.Screen>
                    <Stack.Screen name={'Signup'} component={Signup}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}