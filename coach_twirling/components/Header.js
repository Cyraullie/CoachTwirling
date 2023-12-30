import {Text, Image, StyleSheet, View} from "react-native";

export function Header() {
    return (
        <Image 
        style={styles.tinyLogo}
        source={require("../assets/favicon.png")}
        />
    )
}
    
const styles = StyleSheet.create({  
    tinyLogo: {
        resizeMode: 'stretch',
        width: 45,
        height: 45,
        marginLeft: "auto",
        marginRight: "auto",
    },

});