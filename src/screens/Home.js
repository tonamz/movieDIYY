import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground,TextInput, Alert, Button ,TouchableOpacity,TouchableWithoutFeedback,Icon,ListView} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
   
    };
  }

  static navigationOptions = {
        title:'movieDIY',
        headerTransparent: true,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:20,
          marginTop: 20,
        },
  };


  Actions_Click(name){
      Alert.alert(name);
  }

  
 
  GetTopic=(id,name,owner)=>{

       this.props.navigation.navigate('Home', { 

         id : id,
         name : name,
         owner : owner

       });

  }


  renderItem = (item) => {
    return(

      <View style={{flex:1 , flexDirection: 'column',width:'100%',height:200}}>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Show',{
          id_topic:item.id, name_topic:item.name
        }) && this.Fetchh.bind(this)}>
            <ImageBackground source={require('../../assets/img/folderS.png')} style={{width:'100%', height:'100%'}}>
                <Text style={{fontSize:20, marginLeft:125,marginTop:25}}>{item.name}</Text>
                <Text style={{fontSize:16, marginLeft:50,marginTop:60}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </Text>
            </ImageBackground>
      </TouchableWithoutFeedback>
      </View>

    );
 
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
        // Fetchh().then(response => console.log(response))

  render() {
    this.Fetchh()
    if(this.state.isLoading){
      return(
        <View>
            <Text>Loading</Text>
        </View>
      )
    }
    return (
      
        <ImageBackground source={require('../../assets/img/bg.jpg')} style={{width: '100%', height: '100%'}} >
        <View style={styles.container}> 
            <View style={styles.header}> 
              {/* <Text style={styles.textheader}> eiei</Text> */}
              <TextInput style = {styles.textinSearch}   />
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end',paddingRight:60,}} > 
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Create') && this.Fetchh.bind(this)}

            
                style={styles.btnCircle}>
                <Text>C</Text>
            </TouchableOpacity>
           
            </View>
                <ListView 
                  dataSource = {this.state.dataSource}
                  renderRow = {(rowData) =>  this.renderItem(rowData)
                  }
                  style={styles.list}
                />
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
      header:{
        alignItems: 'center',
        height: 160,
   
      },
      textheader: {
        fontSize: 24,
        textAlign: 'center',
        color:'white'
      },
      textinSearch: {
        width: '60%',
        height: '25%',
        backgroundColor: 'white',
        marginTop: 80,
        borderRadius: 20,
        justifyContent: 'center',
        padding: 10,
        color:'black'
    
      },
      flatlist:{
        backgroundColor: 'red',
      },
      btnCircle:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor:'#fff',
        borderRadius:50,
        marginLeft: 10,
    
      },
      list:{
      
      }
});


