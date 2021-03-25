import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Card} from "react-native-paper";

const Home=()=>{
    return(
        <Card style={styles.mycard}>
            <View style={styles.miCardView}>
                <Image source={{uri:"https://1000marcas.net/wp-content/uploads/2020/01/LinkedIn-emblema.jpg"}} style={styles.miImagen}/>
                <Text style={styles.mitexto}>Welcome</Text>
            </View>
            
        </Card>
       
    );
}; 

const styles= StyleSheet.create({
    mycard:{
        margin:5, 
    },
    mitexto:{
        fontSize:22,
        padding:10
    },
    miImagen:{
        width:200, 
        height:65,
        borderLeftWidth:50/2
    }, 
miCardView:{
    flexDirection:'row',
    padding:10
}
}); 

export default Home; 