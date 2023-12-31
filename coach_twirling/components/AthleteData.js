import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from "react-native";
import axios from "axios";
import { BASE_URL } from "@env"


export default class DataAthleteView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {athleteData: [], _method: "PATCH", data: {}}
      }
      getData = () => {
        axios.get(BASE_URL + "athletes")
        .then((response) => {
            this.getAthleteData(response.data) 
        })
        .catch(error => {
        console.log(error);
        }); 
        
      }


      getAthleteData(data){
        const athleteShift = [];
        //TODO ajout de la suppression et de la modification des athlètes
        for(let i = 0; i < data.length; i++){
            athleteShift.push(
                
                <React.Fragment key={i}>
                    <View key={i} style={styles.ligne}>
                        <Text style={styles.texte}>{data[i].firstname}</Text>
                    </View>
                    
                </React.Fragment>
            )
        }

        this.setState({
            athleteData: athleteShift,
        })
      }


    componentDidMount() {
        this.getData()
    }

    componentDidUpdate(prevProps) {
        // Vérifiez si les propriétés pertinentes ont changé
        if (prevProps.params !== this.props.params) {
          this.getData();
        }
      }

    render() {
        return (
            <>
            {this.state.athleteData}
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
        backgroundColor: '#6d639f',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
    }, 
    ligne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      texte: {
        fontSize: 16,
        color: "black"
      },
});
