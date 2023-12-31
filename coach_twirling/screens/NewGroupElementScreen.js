import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, } from "react-native";
import axios from "axios";
import { BASE_URL } from "@env"

class NewGroupElementScreen extends Component {
    constructor(props) {
        super(props),
        (this.state = { name: "", _method: "PATCH",});
    }

    onPressStore = () => {
      let {name } = this.state;
      let payload = {name };
    
      const onSuccess = () => {
        this.props.navigation.reset({
          index: 0,
          routes: [{ name: 'Technique' }],
        })
      };
  
      const onFailure = (error) => {
        console.log(error && error.response);
        
      };
      axios.post(BASE_URL + "newGroupElement", payload ).then(onSuccess).catch(onFailure)
    }
    
    onGroupElementNameChange = (name) => {
      this.setState({ name: name });
    };  

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.title}>
              <Text style={{textAlign: "center", fontWeight: "bold"}}>Nouvelle Technique</Text>
            </View>
              <Text style={styles.label}>Nom</Text>               
              <TextInput defaultValue={this.state.name} style={styles.text_input} onChangeText={this.onGroupElementNameChange}/>
              <TouchableOpacity
                style={styles.submit}
                onPress={this.onPressStore.bind(this)}>
                  <Text style={styles.submitText}>Ajouter</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  submit: {
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#6d639f',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },  
  submitText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  text_input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    fontSize: 16,
  },
  title: {
    width: "100%",
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

export default NewGroupElementScreen;