
import React from "react";
import { router } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, } from "react-native";
import LoginScreen from "../screens/LoginScreen";

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
                <Text style={styles.textoUsuario}> Usuário </Text>
                <TextInput style={styles.textInputUsuario}></TextInput>

             <View>
                
                <Text style={styles.textoSenha}> Senha </Text>
                <TextInput style={styles.textInputSenha}></TextInput>
            
            
            </View>   
              
                

            </View>

            <View>
              <TouchableOpacity style={styles.buttonEntrar} onPress={logar}>

                <Text style={styles.textButtonEntrar}>Entrar</Text>
                
                
              </TouchableOpacity>
              
            </View>

            <View>
                <Text>
                    
                    {/* Palavra "Registrar" como link clicável */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkRegistrar}>Registrar</Text>
      </TouchableOpacity>
      

                </Text>

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
        padding:30,
    },
    buttonEntrar:{
        height:40,
        width:300,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 12,
},
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,


        

    },
    textButtonEntrar:{
        color: 'white',
        fontSize: 15,
        
    },
    textoUsuario:{
       marginTop: 15
       
    },
    textoSenha:{
        marginTop:15

    },

    

    textInputUsuario:{
        width:'300',
        height:50,
        borderWidth:1,
        borderRadius:10,
        marginTop:10,
        padding: 15,
        
        
    },

    textInputSenha:{
        width:'300',
        height:50,
        borderWidth:1,
        borderRadius:10,
        marginTop:10,
        padding: 15,
        
    },

    linkRegistrar: {
        marginTop: 15,
        color: 'blue', // Cor azul para parecer um link
        textDecorationLine: 'underline', // Sublinhado para enfatizar que é clicável
        fontSize: 16,
        justifyContent:'center',
        alignItems:'center'


    }
  
  
  



    
})


export default Home;