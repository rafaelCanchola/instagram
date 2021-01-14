import {Component} from "react";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from "react-native";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width

export default class Signup extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/backgrounds/boat.jpg')} style={styles.bgimage}></Image>
                <Text>
                    Login page
                </Text>
                <TouchableOpacity style={styles.button2} onPress={()=> this.props.navigation.navigate('Login')}>
                    <Text style={styles.textbutton1}>Go to signup page</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "red",
    },
    bgimage:{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: -1,
        width: screenWidth,
        height: screenHeight+50,
    },
    button1: {
        height: 50,
        backgroundColor: "blue",
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
    },
    button2: {
        height: 50,
        backgroundColor: "red",
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
    },
    button3: {
        height: 50,
        backgroundColor: "yellow",
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
    },
    textbutton1: {
        fontSize: 25,
        color: "white",
    },
    textbutton2: {
        fontSize: 25,
        color: "black",
    },
});

