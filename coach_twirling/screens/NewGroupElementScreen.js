import React, { Component } from "react";
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, } from "react-native";

class TechnicalScreen extends Component {
    constructor(props) {
        super(props),
        (this.state = { username: "", password: ""});
    }
 
    render() {
        return (
            <View style={styles.container}>
              
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
    flexDirection: 'column',
  },
  scrollArea: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    width: "90%",
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom: 20,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  image: {
      width: 40,
      height: 40,
  },

});

export default TechnicalScreen;