import React from "react";
import { router } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

//utilizar zustand para context
const Home = () => {

    const logar = () => {
        router.replace('inicio');

    }



    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets//images/logo.png')} style={styles.logo} /> 
        
            </View> 
                
            <View>
                <Text style={styles.textoLogo}> Login </Text>
        
            </View> 
            <View>
              <TouchableOpacity style={styles.buttonEntrar} onPress={logar}>

                <Text style={styles.textButtonEntrar}>Entrar</Text>
                
              </TouchableOpacity>
              
            </View>

            <View>
                

            </View>

             

        </View>
    )
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,  
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
    },

    logo:{

        width:250,
        height:250,
        
    },
    textoLogo:{
        color: 'black',
        fontSize: 32,
        fontWeight:'bold',
    },
    buttonEntrar:{
        height:40,
        width:200,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'

    },
    textButtonEntrar:{
        color: 'white',
        fontSize: 15,
    }
  
  
  



    
})


export default Home;