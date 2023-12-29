import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView, Alert } from "react-native";
import axios from "axios";
import { BASE_URL } from "@env"


export default class DataElementView extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {elementData: [], _method: "PATCH", data: {}}
      }
      getData = () => {
        axios.get(BASE_URL + "group_elements/" + this.props.params.id_groupElement + "/levels/" + this.props.params.id_level + "/elements")
        .then((response) => {
            this.getElementData(response.data) 
        })
        .catch(error => {
        console.log(error);
        }); 
        
      }


      getElementData(data){
        const elementShift = [];
        
        for(let i = 0; i < data.length; i++){
            elementShift.push(
                <>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.nav.navigate("Variations", { id_groupElement: this.props.params.id_groupElement, name_groupElement: this.props.params.name_groupElement, id_level: this.props.params.id_level, name_level: this.props.params.name_level, id_element: data[i].id, name_element: data[i].name})}>
                        <Text style={styles.buttonText}>{data[i].name}</Text>
                    </TouchableOpacity>
                </>
            )
        }

        this.setState({
            elementData: elementShift,
        })
      }


    componentDidMount() {
        this.getData()
    }

    componentDidUpdate(prevProps) {
        // Vérifiez si les propriétés pertinentes ont changé
        if (prevProps.params !== this.props.params) {
          console.log("componentDidUpdate");
          this.getData();
        }
      }

    render() {
        return (
            <>
            {this.state.elementData}
            </>
        );
    }
}


const styles = StyleSheet.create({
    buttonText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
      },
    button: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 5,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: 'blue',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
    }, 
});
