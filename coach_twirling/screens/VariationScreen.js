import React, { Component, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import DataVariationView from "../components/VariationData";

class VariationScreen extends Component {
    constructor(props) {
        super(props);
        const state = this.props.navigation.getParent();
        console.log('Navigation State:', state);

      
    }
     
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.title}>
                <Text style={{textAlign: "center", fontWeight: "bold"}}>{this.props.route.params.name_groupElement.toUpperCase()}</Text>
                <Text style={{textAlign: "center", fontWeight: "bold"}}>{this.props.route.params.name_level.toUpperCase()}</Text>
              </View>
              <ScrollView style={styles.scrollArea}>
                <DataVariationView params={this.props.route.params} nav={this.props.navigation}/>
              </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  //TODO prendre container comme style de base pour les autres écrans
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

export default VariationScreen;