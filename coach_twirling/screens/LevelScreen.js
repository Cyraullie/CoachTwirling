import React, { Component, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import DataLevelView from "../components/LevelData";

class LevelScreen extends Component {
    constructor(props) {
        super(props)
    }
     
    render() {
        return (
            <View style={styles.container}>
              <Text>{this.props.route.params.name}</Text>
              <ScrollView>
                <DataLevelView id={this.props.route.params.id} name={this.props.route.params.name} nav={this.props.navigation}/>
              </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "stretch",
    textAlign: "center",
    alignContent: "flex-end",
  },
  tabArea: {
    
    flexDirection: "row",
    justifyContent: "space-between"
  },


  image: {
    width: 50,
    height: 200,
  },
  backgroud: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  input: {
    backgroundColor: "#FFFFFF",

    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    height: 50,
  },
  picker: {
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    height: 50,
  },
});

export default LevelScreen;