import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView, Alert } from "react-native";
import axios from "axios";
import { BASE_URL } from "@env"


export default class DataVariationView extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {variationData: [], _method: "PATCH", data: {}}
      }
      getData = () => {
        axios.get(BASE_URL + "group_elements/" + this.props.params.id_groupVariation + "/levels/" + this.props.params.id_level + "/elements/" + this.props.params.id_element + "/variations/")
        .then((response) => {
            console.log(response.data)
            this.getVariationData(response.data) 
        })
        .catch(error => {
        console.log(error);
        }); 
        
      }


      getVariationData(data){
        variations = data[0]
        athletes = data[1]
        groupAthletes = data[2]
        stateElements = data[3]
        const variationShift = [];
        
        for(let i = 0; i < variations.length; i++){
            variationShift.push(
                <React.Fragment key={i}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.nav.navigate("Variation")}>
                        <Text style={styles.buttonText}>{variations[i].name}</Text>
                    </TouchableOpacity>                    
                
                {
                    
                }
                    
                
                </React.Fragment>
            )
        }

        this.setState({
            variationData: variationShift,
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
            {this.state.variationData}
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
