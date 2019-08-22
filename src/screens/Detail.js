import React, { Component } from 'react';
import { View, Text,ImageBackground,StyleSheet,ListView,TextInput ,TouchableOpacity, Alert} from 'react-native';
import {NavigationEvents, withOrientation} from "react-navigation";
import Grid from 'react-native-grid-component';

export default class Detail extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      showdetail:this.props.navigation.getParam("showdetail", '0') ,
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
            {/* <View style={{width:'100%'}}>
                  <ListView  contentContainerStyle={styles.list}
                    
                    dataSource = {this.state.dataSource}
                    renderRow = {(rowData) =>  this.renderItem(rowData)
                    }
                  />
                 
            </View> */}

            {/* <Text style={styles.textinput}> {this.state.showdetail.text} </Text> */}

            {/* <TextInput  
             onChangeText={(text) => this.setState({showdetail: {...this.state.showdetail,text: text}})}
            style={styles.textinput}
            multiline={true}
            numberOfLines={4}
            blurOnSubmit={false}
            value={this.state.showdetail.text}
          /> */}
         <Text style={styles.textDetail}> {this.state.showdetail.text} </Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity  style={styles.btnSave}
         
                onPress={() => 
                  this.props.navigation.navigate('Create',{
                      text:this.state.showdetail.text,
                      name_topic:this.state.name_topic,
                      topic:this.state.name_topic,
                      topicItem:this.state.showdetail.id_topic,
                      subTopic:this.state.showdetail.name,
                      subTopicID:this.state.showdetail.id_subtopic,
                      Edit:1,
                      idArticles:this.state.showdetail.id
                    })
                }
            >
              <Text style={{ color:'white',fontSize: 18,}}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.btnDelete}
             onPress={() => {
              Alert.alert(
                'ยืนยันการลบ',
                'กรุณากดยืนยันหากท่านต้องการลบ',
                [
                  {text: 'ยกเลิก', onPress: () => console.log('OK Pressed')},
                  {
                    text: 'ยืนยัน',
                    onPress: () =>{
                      
                      fetch('http://tssnp.com/ws_movieDIY/article_delete.php?id='+this.state.showdetail.id)
                      this.props.navigation.navigate('Show',{
                          id_topic:this.state.showdetail.id_topic, name_topic:this.state.name_topic
                        })
                  
                  }    ,
                    style: 'cancel',
                  },
                  
                ],
                {cancelable: false},
              );

            }}
           
            >
              <Text style={{ color:'white',fontSize: 18,}}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.btnSave}
             onPress={() => {
              this.props.navigation.navigate('Log',{
                // id_topic:this.state.showdetail.id_topic, name_topic:this.state.name_topic
              })

            }}
           
            >
              <Text style={{ color:'white',fontSize: 18,}}>Go To Logstory Line</Text>
            </TouchableOpacity>
            
            </View> 
          


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
      marginTop:100,
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
    
  },textDetail:{
      width:'80%',
      height:550,
      marginLeft:'7.5%',
      fontSize:18,
      lineHeight:24,
      borderColor: 'gray',
      borderWidth: 0.5,
      padding:20,
      marginTop:50,
  },btnSave:{
      width:'60%',
      height:40,
      backgroundColor:'#2f518e',
      marginTop:30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
  },
  btnDelete:{
    width:'60%',
    height:40,
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  
    backgroundColor:'red',
 
},
  topic:{
    flexDirection: 'row',
    marginLeft:'7.5%',
    marginTop:100,
  },head:{
    color:'black',
    fontSize:24,
    marginTop:35,
    marginLeft:130,
  }
   
});





