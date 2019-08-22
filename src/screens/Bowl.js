import React, { Component } from 'react';
import { View, Text ,ImageBackground,StyleSheet} from 'react-native';
import {NavigationEvents, withOrientation} from "react-navigation";
import { StackNavigator } from 'react-navigation'; 

export default class Bowl extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title:'MovieDIY',
    headerTransparent: true,
    headerBackTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:20,
      marginTop: 20,
    },
};

  render() {
    return (
        <ImageBackground source={require('../../assets/img/bg.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.box}> 
            <Text style={styles.txthead}>STORY BOWL</Text>
          

          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:'5%',
      },
      box:{
        backgroundColor:'white',
        padding:10,
        paddingTop:40,
        borderRadius:20,
        marginTop:120,
        height:850,
        width:'90%',
        marginLeft:40,
        shadowOpacity: 0.75,
          shadowRadius: 5,
          shadowColor: 'grey',
          shadowOffset: { height: 0, width: 0 },
      
      },
      txthead:{
        fontSize:24,
        textAlign: 'center',
        
      },
    }); 
