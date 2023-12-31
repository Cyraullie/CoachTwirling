import React, { Component, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image} from "react-native";
import DataElementView from "../components/ElementData";

class ElementScreen extends Component {
    constructor(props) {
        super(props)
    }
     
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.title}>
              <Text style={{textAlign: "center", fontWeight: "bold"}}>{this.props.route.params.name_groupElement}</Text>
              <Text style={{textAlign: "center", fontWeight: "bold"}}>{this.props.route.params.name_level}</Text>
              </View>
              <ScrollView style={styles.scrollArea}>
                <DataElementView params={this.props.route.params} nav={this.props.navigation}/>
              </ScrollView>
              <TouchableOpacity style={styles.floatingButton} onPress={() => this.props.navigation.navigate("NewElement", { nav: this.props.navigation, params: this.props.route.params}) }>
                <Image
                  source={require("../assets/plus.png")}
                  style={styles.image}
                />
              </TouchableOpacity>
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
    backgroundColor: '#6d639f',
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

export default ElementScreen;