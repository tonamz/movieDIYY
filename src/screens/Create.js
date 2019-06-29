import React, { Component } from 'react';
import { View, Text,ImageBackground,StyleSheet } from 'react-native';
import {NavigationEvents} from "react-navigation";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
        title: 'Create',
        headerBackTitle: null,
        headerTransparent: true,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:20,
          marginTop: 20,
    
        },
        
        
    }
}


  render() {

    return (
      <View>
        <ImageBackground source={require('../../assets/img/bg.jpg')} style={styles.container}>

        <View style={styles.container}> 
            <ImageBackground source={require('../../assets/img/folderL.png')} style={styles.imgfolderL}>
          
              </ImageBackground> 
          </View>
        </ImageBackground>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {


    },
    imgfolderL:{
      width:'98%',
      height:'95%',
      marginTop: 60,
      marginLeft:22

    }
   
});





