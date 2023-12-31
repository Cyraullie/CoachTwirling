import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, } from "react-native";
import axios from "axios";
import { BASE_URL } from "@env"
import { Dropdown } from 'react-native-element-dropdown';

const dataSelect = [
  { label: 'Lundi', value: '1' },
  { label: 'Jeudi', value: '2' },
  { label: 'Vendredi 1', value: '3' },
  { label: 'Vendredi 2', value: '4' },
  { label: 'Samedi', value: '5' },
];

class NewAthleteScreen extends Component {
    constructor(props) {
        super(props),
        (this.state = { firstname: "", group1: null, group2: null, _method: "PATCH",});
    }

    onPressStore = () => {
      let {firstname, group1, group2 } = this.state;
      let payload = {firstname, group1, group2 };

      const onSuccess = () => {
        this.props.navigation.reset({
          index: 0,
          routes: [{ name: 'Athletes' }],
        })
      };
  
      const onFailure = (error) => {
        console.log(error && error.response);
        
      };
      axios.post(BASE_URL + "newAthlete", payload ).then(onSuccess).catch(onFailure)
    }
    
    onTextInputChange = (firstname) => {
      this.setState({ firstname: firstname });
    }; 

    onGroup1Change = (group1) => {
      this.setState({ group1: group1.value });
    }; 

    onGroup2Change = (group2) => {
      this.setState({ group2: group2.value });
    };  

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.title}>
              <Text style={{textAlign: "center", fontWeight: "bold"}}>Nouvelle Athlète</Text>
            </View>
              <Text style={styles.label}>Prénom</Text>               
              <TextInput defaultValue={this.state.firstname} style={styles.text_input} onChangeText={this.onTextInputChange}/>

              <Text style={styles.label}>Groupe 1</Text>  
              <Dropdown
                style={styles.dropdown}
                //placeholderStyle={styles.placeholderStyle}
                //selectedTextStyle={styles.selectedTextStyle}
                //inputSearchStyle={styles.inputSearchStyle}
                data={dataSelect}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Choissez un groupe"
                onChange={this.onGroup1Change}
            />

              <Text style={styles.label}>Groupe 2</Text>  
              <Dropdown
                style={styles.dropdown}
                //placeholderStyle={styles.placeholderStyle}
                //selectedTextStyle={styles.selectedTextStyle}
                //inputSearchStyle={styles.inputSearchStyle}
                data={dataSelect}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Choissez un groupe"
                onChange={this.onGroup2Change}
              />

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
    marginTop: 10,
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
    marginBottom: 10,
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

export default NewAthleteScreen;