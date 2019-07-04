import React, { Component } from 'react';
import { View, Text,ImageBackground,StyleSheet,ListView,TextInput } from 'react-native';
import {NavigationEvents, withOrientation} from "react-navigation";
import Grid from 'react-native-grid-component';

export default class Create extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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

    Fetchh(){
        return fetch('http://tssnp.com/ws_movieDIY/topic.php')
        .then((response)=> response.json())
        .then((responseJson)=> {
              let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2})
              this.setState({
                isLoading: false,
                dataSource: ds.cloneWithRows(responseJson),
              },function(){});

              }).catch((error) => {
                console.error(error);
              })
      }
      renderItem = (item) => {
        return( 
          <View style={styles.item}>
          <Text style={styles.itemtag}>{item.name}</Text>
          </View>
        );

      }


  render() {
    this.Fetchh()
    if(this.state.isLoading){
      return(
        <View >
            <Text>Loading</Text>
        </View>
      )
    }
    return (
      <View>
        <ImageBackground source={require('../../assets/img/bg.jpg')} style={styles.container}>

        <View style={styles.container}> 
            <ImageBackground source={require('../../assets/img/folderL.png')} style={styles.imgfolderL}>
            <View style={{width:'100%'}}>
                  <ListView  contentContainerStyle={styles.list}
                    
                    dataSource = {this.state.dataSource}
                    renderRow = {(rowData) =>  this.renderItem(rowData)
                    }
                  />
            </View>

            <TextInput
              multiline={true}
              numberOfLines={4}
              blurOnSubmit={false}
            />
          

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
      

    },
    list: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft:20,
      marginTop:100
  },
  item: {
      
      margin: 3,
      width: 160,
      height:40,
      marginLeft:30,
      marginBottom:20,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'gray',
      borderWidth: 0.5,
   
  },
  itemtag:{
    color:'gray',
    fontSize:18,
    
  }
   
});





