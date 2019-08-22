import React, { Component } from 'react';
import { View, Text ,ImageBackground,StyleSheet,TouchableOpacity ,TextInput ,Modal ,ListView,ScrollView} from 'react-native';
import {NavigationEvents, withOrientation} from "react-navigation";
import { StackNavigator } from 'react-navigation'; 

export default class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      modalVisible: false,
      id_topic: null,
      text_genre: null,
      text_theme: null,
      text_setting: null,
      text_charactor: null,
      text_gole: null,
      text_obstacle: null,
      text_solution: null,
      text_cando: null,
      text_last: null,
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
setModalVisible(visible) {
  this.setState({modalVisible: visible});
}
Fetchh = (id_topic) =>{

  return fetch('http://tssnp.com/ws_movieDIY/articles.php?id_topic='+id_topic)
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
    <TouchableOpacity
       onPress={() => {
         
        this.setModalVisible(!this.state.modalVisible);
        this.setText(item.id_topic,item.text)
      
      }} > 
      <View style={styles.item}>
          <Text style={styles.text} >{item.text}</Text>
      </View>
    </TouchableOpacity>

  );

}

setText = (id_topic,text) =>{
  if(id_topic == 1){
    this.setState({text_setting:text })
  }else if(id_topic == 2){
    this.setState({text_charactor:text })
  }else if(id_topic == 3){
    this.setState({text_gole:text })
  }else if(id_topic == 4){
    this.setState({text_obstacle:text })
  }
}



  render() {

    this.Fetchh(this.state.id_topic);
   
    if(this.state.isLoading){
      return(
        <View >
            <Text>Loading</Text>
        </View>
      )
    }
    return (
    
    
        <ImageBackground source={require('../../assets/img/bg.jpg')} style={{width: '100%', height: '100%'}}>
          
          <View style={styles.box}> 
          <ScrollView>
            <Text style={styles.txthead}>LOG STORY LINE</Text>
            <View style={styles.topic}>
                <Text style={{ color:'black',fontSize: 18,}}>Genre :</Text>
                <TextInput  
                  onChangeText={(text_genre) => this.setState({text_genre})}
                  value={this.state.text_genre}
                    style={styles.textinput}
                    multiline={true}
                    numberOfLines={1}
                    blurOnSubmit={false}
                    placeholder="Please type"
                />
                
              
                   
            </View>
            <View style={styles.topic}>


              <Text style={{ color:'black',fontSize: 18,}}>Theme :</Text>

                <TextInput  
                    onChangeText={(text_theme) => this.setState({text_theme})}
                    value={this.state.text_theme}
                    style={styles.textinput}
                    multiline={true}
                    numberOfLines={2}
                    blurOnSubmit={false}
                    placeholder="Please type"
                />
 
            </View>

            <View style={styles.topic}>
                <Text style={{ color:'black',fontSize: 18,}}>Setting :</Text>
                <TouchableOpacity  
            
                onPress={() => {

                  
                  this.setState({id_topic:1 })
                    this.setModalVisible(!this.state.modalVisible);

                }}
                style={styles.btnTopic}
                >
                  <Text >Choose Setting</Text>
                </TouchableOpacity>

            </View>
           
            {this.state.text_setting != null? <View style={styles.item}>
                  <Text style={styles.text} >{this.state.text_setting}</Text>
            </View>
            : null }
            

            <View style={styles.topic}>
                <Text style={{ color:'black',fontSize: 18,}}>Character :</Text>
                <TouchableOpacity  
                   onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    this.setState({
                      id_topic:2 })
  
                  }}
                style={styles.btnTopic}
                >
                  <Text >Choose Character</Text>
                </TouchableOpacity>
              
                   
            </View>

            {this.state.text_charactor != null? <View style={styles.item}>
                  <Text style={styles.text} >{this.state.text_charactor }</Text>
            </View>
            : null }

            <View style={styles.topic}>
                <Text style={{ color:'black',fontSize: 18,}}>Goal :</Text>
                <TouchableOpacity  
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    this.setState({
                      id_topic:3 })
  
                  }}
                style={styles.btnTopic}
                >
                  <Text >Choose Goal</Text>
                </TouchableOpacity>
              
                   
            </View>

            {this.state.text_gole != null? <View style={styles.item}>
                  <Text style={styles.text} >{this.state.text_gole }</Text>
            </View>
            : null }

            <View style={styles.topic}>
                <Text style={{ color:'black',fontSize: 18,}}>Obstacle :</Text>
                <TouchableOpacity  
                   onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    this.setState({
                      id_topic:4 })
  
                  }}
                style={styles.btnTopic}
                >
                  <Text >Choose Obstacle</Text>
                </TouchableOpacity>
              
                   
            </View>

            {this.state.text_obstacle != null? <View style={styles.item}>
                  <Text style={styles.text} >{this.state.text_obstacle }</Text>
            </View>
            : null }

            <View style={styles.topic}>
                <Text style={{ color:'black',fontSize: 18,}}>Solution :</Text>
                <TextInput  
                  onChangeText={(text_solution) => this.setState({text_solution})}
                  value={this.state.text_solution}
                    style={styles.textinput}
                    multiline={true}
                    numberOfLines={1}
                    blurOnSubmit={false}
                    placeholder="Please type"
                />
              
                   
            </View>
            <View style={styles.topic}>
                <Text style={{ color:'black',fontSize: 18,}}>ทำได้ไม่ได้ :</Text>
                <TextInput  
                  onChangeText={(text_cando) => this.setState({text_cando})}
                  value={this.state.text_cando}
                    style={styles.textinput}
                    multiline={true}
                    numberOfLines={1}
                    blurOnSubmit={false}
                    placeholder="Please type"
                />
              
                   
            </View>
            <View style={styles.topic}>
                <Text style={{ color:'black',fontSize: 18,}}>สุดท้ายแล้ว :</Text>
                <TextInput  
                  onChangeText={(text_last) => this.setState({text_last})}
                  value={this.state.text_last}
                    style={styles.textinput}
                    multiline={true}
                    numberOfLines={1}
                    blurOnSubmit={false}
                    placeholder="Please type"
                />
              
                   
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity  style={styles.btnSave}
                onPress={() => this.props.navigation.navigate('Bowl') }
              >
                <Text style={{ color:'white',fontSize: 18,}}>GO TO STORY BOWL</Text>
              </TouchableOpacity>
            </View>

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


                    <ListView 
                      dataSource = {this.state.dataSource}
                      renderRow = {(rowData) =>  this.renderItem(rowData)}
                     
                    />
                     <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible);}} > 
                            <Text style={styles.itemtag}>hide</Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
             
              </Modal>

  
          
              </ScrollView>
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
      marginBottom:20,
      
    },
    topic:{
      flexDirection: 'row',
      marginLeft:'7.5%',
      marginBottom:20,
    },
    tag:{
      flexDirection: 'row',
      marginLeft:'7.5%',
      marginTop:20,
    },
    btnTopic:{
      borderColor: 'gray',
      borderWidth: 0.5,
      width:150,
      height:30,
      padding:5,
      marginLeft:10,
      borderRadius:10,
    },textinput:{
      width:'80%',
      fontSize:18,
      lineHeight:24,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius:5,
      padding:10,
      marginLeft:10,
  },
    btnSave:{
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
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    marginTop:60,
  
  },
  item:{
    width:'90%',
   backgroundColor:'#ebe9e6',
   marginLeft:40,
   padding:10,
   borderRadius:10,
   marginBottom:20,
  }
  });