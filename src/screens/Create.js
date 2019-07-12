import React, { Component } from 'react';
import { View, Text,ImageBackground,StyleSheet,ListView,TextInput ,TouchableOpacity, Alert,AlertIOS,Modal} from 'react-native';
import {NavigationEvents, withOrientation} from "react-navigation";
import Grid from 'react-native-grid-component';

export default class Create extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: '',
      modalVisible: false,

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

      AlertCreateTopic = () => {
        AlertIOS.prompt(
          'Create Topic',
          'create your own topic',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Create',
              // onPress: (topic) => console.log('topic: ' + topic),
              onPress: (topic) => this.CreateTopic(topic),
              
            },
          ],
          'plain-text',
        );
      }

      CreateTopic = (NewTopic) =>{

        var name = NewTopic;
        var owner ='1';
        var param = `name=${name}&&owner=${owner}`;

        fetch("http://tssnp.com/ws_movieDIY/create_topic.php", {
          method: 'POST',
          headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
          body: param // <-- Post parameters
        })
        .then((response) => response.text())
        .then((responseText) => {
          alert(responseText);
        })
        .catch((error) => {
            console.error(error);
        });
      }


      InsertDataToServer = (text) => {
        var a ='199';
        var b = this.state.text;
        var param = `id_topic=${a}&&text=${b}`;

        fetch("http://tssnp.com/ws_movieDIY/article_write.php", {
          method: 'POST',
          headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
          body: param // <-- Post parameters
        })
        .then((response) => response.text())
        .then((responseText) => {
          alert(responseText);
        })
        .catch((error) => {
            console.error(error);
        });

      }

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
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

              <Modal
               style={{backgroundColor:'red'}}
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                
                <View  style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                }} >
                  <View style={styles.hideModal}>
                    

                  <ListView  contentContainerStyle={styles.list}
                    
                    dataSource = {this.state.dataSource}
                    renderRow = {(rowData) =>  this.renderItem(rowData)
                    }
                  />

                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Text>Hide Modal</Text>
                    </TouchableOpacity>
                  </View>
                </View>
             
              </Modal>


                  {/* <ListView  contentContainerStyle={styles.list}
                    
                    dataSource = {this.state.dataSource}
                    renderRow = {(rowData) =>  this.renderItem(rowData)
                    }
                  /> 
                  
                  
                   <TouchableOpacity onPress={this.AlertCreateTopic} >
                      <Text>+</Text>
                   </TouchableOpacity>
                  
                  */}
              <View style={styles.topic}>
                  <Text style={{ color:'black',fontSize: 18,}}>Topic :</Text>
                <TouchableOpacity  
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={styles.btnTopic}
                >
                  <Text >Topic</Text>
                </TouchableOpacity>
              
                   
              </View>
              
             
                  
            </View>
           
           
            <TextInput  
            
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
              style={styles.textinput}
              multiline={true}
              numberOfLines={4}
              blurOnSubmit={false}
            />

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity  style={styles.btnSave}
              onPress={this.InsertDataToServer}
              >
                <Text style={{ color:'white',fontSize: 18,}}>Save</Text>
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
    
  },textinput:{
      width:'80%',
      height:550,
      marginLeft:'7.5%',
      fontSize:24,
      lineHeight:24,
      borderColor: 'gray',
      borderWidth: 0.5,
      marginTop:30,
  },btnSave:{
      width:'60%',
      height:40,
      backgroundColor:'#2f518e',
      marginTop:30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
  },
  hideModal:{
    width: 650,
    height: 800, 
    backgroundColor:'white',
    marginTop:60
  },
  topic:{
    flexDirection: 'row',
    marginLeft:'7.5%',
    marginTop:100,
  },
  btnTopic:{
    borderColor: 'gray',
    borderWidth: 0.5,
    width:100,
    height:30,
    padding:5,
    marginLeft:10,
    borderRadius:10,
  }
   
});





