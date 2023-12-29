import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from "react";
import Menu from "./nav/Menu.js"



export default class App extends Component { 
  constructor(props){
    console.disableYellowBox = true;
    super(props);
  }

  render(){
    return (
        <Menu />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
