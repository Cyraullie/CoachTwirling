import React, { Component, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
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
});

export default ElementScreen;