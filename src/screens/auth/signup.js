import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";

class Signup extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Signup</Text>
            </View>
        );
    }
}
export default Signup;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});