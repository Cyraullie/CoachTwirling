import React from 'react';
import {Text, Image, StyleSheet, View, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
/*

TODO faire un bouton pour retourner en arrière
{navigation.canGoBack() && (
            <TouchableOpacity style={styles.back} onPress={() => navigation.pop()}>
                <Image 
                    style={styles.backImage}
                    source={require("../assets/back.png")}
                />
            </TouchableOpacity>
            )}


*/


export function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.headerStyle}>
            
            <Image 
                style={styles.tinyLogo}
                source={require("../assets/favicon.png")}
            />
        </View>
    )
}
    
const styles = StyleSheet.create({  
    tinyLogo: {
        resizeMode: 'stretch',
        width: 45,
        height: 45,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
    },
    headerStyle: {
        backgroundColor: "#6d639f",
        height: 80
    },
    back: {
        marginTop: "auto",
        marginBottom: "auto",
    },
    backImage: {
        width: 45,
        height: 45,
    },

});