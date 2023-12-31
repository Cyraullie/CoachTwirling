import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ScrollView, Alert, Linking } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import axios from "axios";
import { BASE_URL } from "@env"

const dataSelect = [
    { label: 'Pas commencé', value: 'PC' },
    { label: 'Commencé', value: 'C' },
    { label: 'Réussi', value: 'R' },
    { label: 'Validé', value: 'V' },
  ];

export default class DataVariationView extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {variationData: [], _method: "PATCH", data: {}, checked: 'PC', variation_id: "", athlete_id: ""}
      }
      getData = () => {
        console.log(this.props.params)
        axios.get(BASE_URL + "group_elements/" + this.props.params.id_groupElement + "/levels/" + this.props.params.id_level + "/elements/" + this.props.params.id_element + "/variations/")
        .then((response) => {
            this.getVariationData(response.data) 
        })
        .catch(error => {
        console.log(error);
        }); 
        
      }

      handleRadioChange = (newValue, athleteId, variationId) => {
        console.log(`Athlète ${athleteId}, Variation ${variationId}, Nouvelle valeur ${newValue.value}`);
        let payload = {variation_id: variationId, athlete_id: athleteId, state: newValue.value}
        console.log(payload)
        axios.post(BASE_URL + "state_element/" , payload)
          .then((response) => {

          })
        .catch(error => {
          console.log(error.response.request._response);
        });
        //this.setState({ checked: newValue });
      };

      handleGroupSelect = (groupId) => {
        this.setState({ selectedGroup: groupId });
      };


      getVariationData(data){
        let variations = data[0]
        let athletes = data[1]
        let groupAthletes = data[2]
        let element = data[3]
        const variationShift = [];
        
        const handleImageClick = () => {
            const url = element.link;  // Remplacez par l'URL souhaitée
            Linking.openURL(url);
          };

        variationShift.push(
            <React.Fragment key={450000}>
                <TouchableOpacity style={styles.imageButton} onPress={handleImageClick}>
                    <Image
                        source={require("../assets/film.png")}
                        style={styles.image}
                    />
                </TouchableOpacity>
            </React.Fragment>
        )
          
        for(let i = 0; i < variations.length; i++){
            variationShift.push(
                <React.Fragment key={i + 1100}>
                    <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.variation}
                        >
                        <Text style={styles.variationText}>{variations[i].name.toUpperCase()}</Text>
                    </TouchableOpacity>      
                    <View>
                    {
                        groupAthletes.map((groupAthlete, index) => {
                            /*viewsData.push(
                                { key: "variation" + variations[i].id + groupAthlete.id}
                            )*/
                            return (
                            <React.Fragment key={index}>
                                    <TouchableOpacity>
                                        <Text style={styles.groupAthlete}>{groupAthlete.name.toUpperCase()}</Text>
                                    </TouchableOpacity>
                                    {
                                        athletes.map((athlete, index) => {
                                            if (athlete.group_athlete_id1 === groupAthlete.id || athlete.group_athlete_id2 === groupAthlete.id) {
                                                let result = athlete.state_elements.find(variation => variation.variation_id === variations[i].id)
                                                
                                                
                                                return ( 
                                                    <React.Fragment key={index}>
                                                        
                                                        <View style={styles.athleteArea}>
                                                            <Text>{athlete.firstname}</Text>
                                                        
                                                            <Dropdown
                                                                style={styles.dropdown}
                                                                //placeholderStyle={styles.placeholderStyle}
                                                                //selectedTextStyle={styles.selectedTextStyle}
                                                                //inputSearchStyle={styles.inputSearchStyle}
                                                                data={dataSelect}
                                                                maxHeight={300}
                                                                labelField="label"
                                                                valueField="value"
                                                                placeholder="Select item"
                                                                value={result !== undefined ? result.state : this.state.checked}
                                                                onChange={(newValue) => {
                                                                    this.handleRadioChange(newValue, athlete.id, variations[i].id);
                                                                  }}
                                                            />
                                                        </View>
                                                    </React.Fragment>
                                                );
                                            } else {
                                                return null; // Si le groupe ne correspond pas, retourne null
                                            }
                                        })
                                    }
                            </React.Fragment>
                        )})
                    }
                    
                    </View>
                        
                    </View>
                </React.Fragment>
            )
        }

        this.setState({
            variationData: variationShift,
        })
      }


    componentDidMount() {
        //this.refreshInterval = setInterval(() => {
            this.getData()
        //}, 5000);
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
        backgroundColor: '#6d639f',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
    }, 
    image: {
        width: 50,
        height: 50,
    },
    imageButton: {
        width: 50,
        height: 50,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
    },
    groupAthlete: {
        fontWeight: "bold",
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginBottom: 15,
    },
    dropdown: {
        height: 25,
        width: 150,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
    athleteArea: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 10,

    },
    variation: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginBottom: 10,
    },
    variationText: {
        fontWeight: "bold",
    },
    container: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
    }
});
