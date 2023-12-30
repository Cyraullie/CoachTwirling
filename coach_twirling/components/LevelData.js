import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView, Alert } from "react-native";
import axios from "axios";
import { BASE_URL } from "@env"


export default class DataLevelView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {levelData: [], _method: "PATCH", data: {}}
      }
      getData = () => {
        axios.get(BASE_URL + "group_elements/" + this.props.id + "/levels")
        .then((response) => {
            this.getlevelData(response.data) 
        })
        .catch(error => {
        console.log(error);
        }); 
        
      }


      getlevelData(data){
        const levelShift = [];
        
        for(let i = 0; i < data.length; i++){
            levelShift.push(
                
                <React.Fragment key={i + 100}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.nav.navigate("Elements", { id_groupElement: this.props.id, name_groupElement: this.props.name, id_level: data[i].id, name_level: data[i].name})}>
                        <Text style={styles.buttonText}>{data[i].name}</Text>
                    </TouchableOpacity>
                </React.Fragment>
            )
        }

        this.setState({
            levelData: levelShift,
        })
      }


    componentDidMount() {
        this.getData()
    }

    componentDidUpdate(prevProps) {
        // Vérifiez si les propriétés pertinentes ont changé
        if (prevProps.id !== this.props.id) {
          console.log("componentDidUpdate");
          this.getData();
        }
      }

    render() {
        return (
            <>
            {this.state.levelData}
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
