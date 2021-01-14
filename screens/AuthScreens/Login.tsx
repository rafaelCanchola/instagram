import {Component} from "react";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Image} from "react-native";

import {bindActionCreators} from "redux";
import {updateEmail,updatePassword} from '../../actions/user';
import {connect} from 'react-redux';

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width

class Login extends React.Component{


    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/backgrounds/boat.jpg')} style={styles.bgimage}></Image>
                <Text style={styles.title}>
                    Instagram
                </Text>
                <View>
                    <Text >Email</Text>
                    <TextInput style ={styles.text}
                               placeholderTextColor={'grey'}
                               placeholder={'Correo'}
                               onChangeText={input=>this.props.updateEmail(input)}
                               value={this.props.user.email} />
                    <Text >Password</Text>
                    <TextInput style ={styles.text}
                               placeholderTextColor={'grey'}
                               placeholder={'Password'}
                               secureTextEntry={true}
                               onChangeText={input=>this.props.updatePassword(input)}
                               value={this.props.user.password}/>
                </View>
                <View style={styles.viewlogin}>
                    <TouchableOpacity style={[styles.button, styles.buttonDisabled]} onPress={()=>alert(this.props.user.email + " : " + this.props.user.password)}>
                                       <Text style={styles.textbutton1}>Iniciar Sesión</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchableregistry} onPress={()=>this.props.navigation.navigate('Signup')}>
                        <Text style={styles.noaccount}>¿No tienes una cuenta?</Text>
                        <Text style={[styles.noaccount,styles.register]}> Registrate</Text>
                    </TouchableOpacity>
                    </View>
                <View style={styles.viewfooter}>
                    <Text style={{fontSize:18}}>from</Text>
                    <Text style={{fontSize:20, fontWeight: "bold"}}>Nirvardo</Text>
                </View>

            </View>
            )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateEmail, updatePassword }, dispatch)
}
const mapStateToProps = (state) => {
    return{
        user: state.user,
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Login)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    viewlogin:{
        width: screenWidth,
        justifyContent: "center",
        alignItems: "center",
        margin: 30,
    },
    viewfooter:{
        justifyContent: "center",
        alignItems: "center",
    },
    bgimage:{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: -1,
        width: screenWidth,
        height: screenHeight+50,
    },
    touchableregistry:{
        alignItems: "center",
        flexDirection: "row",
        margin: 10,
    },
    noaccount:{
        fontSize:18,
    },
    register:{
        fontWeight: "bold",
        color: "#0095f6",
    },
    text: {
        height: 50,
        width: screenWidth*0.9,
        color: "black",
        paddingHorizontal:20,
        margin:20,
        borderRadius:10,
        borderColor:'grey',
        borderWidth:1,
    },
    title: {
        fontSize:80,
        fontWeight:'bold',
        fontFamily: 'BilboSwashCaps',
        marginVertical: 60,
    },
    button:{
        height: 50,
        width: screenWidth*0.9,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
    },
    buttonDisabled: {
        backgroundColor:'rgba(0,149,246,.3)',

    },
    buttonEnabled: {
        backgroundColor: "#0095f6",
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

