import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from "react-native";
import axios from "axios";
import { BASE_URL } from "@env"


export default class DataGroupElementView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {groupElementData: [], _method: "PATCH", data: {}}
      }
      getData = () => {
        axios.get(BASE_URL + "group_elements")
        .then((response) => {
            this.getGroupElementData(response.data) 
        })
        .catch(error => {
        console.log(error);
        }); 
        
      }


      getGroupElementData(data){
        const groupElementShift = [];
        
        for(let i = 0; i < data.length; i++){
            groupElementShift.push(
                <>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.nav.navigate("Levels", { id: data[i].id, name: data[i].name})}>
                        <Text style={styles.buttonText}>{data[i].name + " " + data[i].id}</Text>
                    </TouchableOpacity>
                </>
            )
        }

        this.setState({
            groupElementData: groupElementShift,
        })
      }


    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <>
            {this.state.groupElementData}
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
