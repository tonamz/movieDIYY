import React, { Component } from 'react';
import { View, Text,ImageBackground,StyleSheet,ListView,TextInput ,TouchableOpacity, Alert} from 'react-native';
import {NavigationEvents, withOrientation} from "react-navigation";
import Grid from 'react-native-grid-component';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class Show extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      id_topic: this.props.navigation.getParam("id_topic", '0') ,
      name_topic: this.props.navigation.getParam("name_topic", '0') ,
    

    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
        title: 'MovieDIY',
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
        return fetch('http://tssnp.com/ws_movieDIY/articles.php?id_topic='+this.state.id_topic)
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
          <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate('Detail',{
            showdetail:item
          }) && this.Fetchh.bind(this)}
          
          >
            <View style={styles.item}>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </TouchableWithoutFeedback>
        );

      }


      InsertDataToServer () {
    
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
            
              <Text style={styles.head}>{this.state.name_topic}</Text>

              <ListView 
                  dataSource = {this.state.dataSource}
                  renderRow = {(rowData) =>  this.renderItem(rowData)
                  }
                  style = {styles.listview}
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
    item:{
      width:'80%',
      height: 120,
     backgroundColor:'#ebe9e6',
     marginLeft:62,
     padding:30,
     borderRadius:20,
     marginBottom:20,


    },
    listview:{
      marginTop:80
    },head:{
      color:'black',
      fontSize:24,
      marginTop:35,
      marginLeft:130,
    },
    text:{
      fontSize:18,
      lineHeight:24,
    }
   

 
  
});





