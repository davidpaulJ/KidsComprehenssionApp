import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';


export default function MainContainer(){  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    return (  
      
            <View style={styles.mainContainer}>   
                <View style={[styles.childContainer,{flex:2}]}>
                  <TouchableOpacity onPress={console.log('awd')} style={[{borderColor: "blue"},styles.genderButton]}>
                      <Text style={[{color: "blue",},styles.genderButtonText]}>Dreng</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={console.log('awd')} style={[{borderColor: "red"},styles.genderButton]}>
                      <Text style={[{color: "red",},styles.genderButtonText]}>Pige</Text>
                  </TouchableOpacity>
                </View>             
                <View style={[styles.childContainer,{flex:2}]}>
                    <Text style={{color: "red",fontSize:30,alignSelf:"center",color:"black",fontWeight: "bold",}}>Alder</Text>
                    <TouchableOpacity onPress={console.log('awd')} style={[styles.genderButton,{borderColor: "black",width:200}]}>
                        <Text style={[{color: "black",},styles.genderButtonText]}>Vaeg Foldsedato</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.childContainer,{flex:6}]}>
                    <TouchableOpacity onPress={console.log('awd')} style={[{borderColor: "black"},styles.genderButton]}>
                        <Text style={[{color: "black",},styles.genderButtonText]}>00                                                     00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={console.log('awd')} style={[{borderColor: "black"},styles.genderButton]}>
                    <Text style={[{color: "black",},styles.genderButtonText]}>00                                                     00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={console.log('awd')} style={[{borderColor: "black"},styles.genderButton]}>
                    <Text style={[{color: "black",},styles.genderButtonText]}>00                                                     00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={console.log('awd')} style={[{borderColor: "black"},styles.genderButton]}>
                    <Text style={[{color: "black",},styles.genderButtonText]}>00                                                     00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={console.log('awd')} style={[{borderColor: "black"},styles.genderButton]}>
                    <Text style={[{color: "black",},styles.genderButtonText]}>00                                                     00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={console.log('awd')} style={[{borderColor: "black"},styles.genderButton]}>
                    <Text style={[{color: "black",},styles.genderButtonText]}>00                                                     00</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.childContainer,{flex:1}]}>
                  <TouchableOpacity onPress={console.log('awd')} style={[{backgroundColor:"lightgrey",borderRadius:10,borderColor: "grey"},styles.genderButton]}>
                      <Text style={[{color: "grey",},styles.genderButtonText]}>Fortsaet</Text>
                  </TouchableOpacity>
                </View>
            </View>      
       
    );  
} 
// React Native Styles
const styles = StyleSheet.create({
    // ...
    genderButton: {  
      borderWidth: 1,             
      paddingVertical: 10,   
      width:350,   
      marginTop: 20
    },
    genderButtonText: {
      fontSize: 18,      
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },

    mainContainer: {    
        flex:1,
        paddingVertical: 70,
        paddingHorizontal: 20,      
        justifyContent: 'flex-start',
        alignItems: 'center'      
      },
    childContainer: {                     
  
        justifyContent: 'center',
        alignItems: 'center'      
      }
  });
      
 
