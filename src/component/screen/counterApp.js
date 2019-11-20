import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

class counterApp extends Component{
    state={
      counter:0
    }
    increamentConter=()=>{
      this.setState({counter:this.state.counter+1})
    }
    decreamentCounter=()=>{
      this.setState({counter:this.state.counter-1})
    }
    render(){
      return(
        <View style={{flex:1}}>
        <View style={{flex:50,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>this.increamentConter()}>
        <Text>Increament</Text>
        </TouchableOpacity>
        <Button 
        title = 'Decrement'
        onPress={()=>this.decreamentCounter()}>
        </Button>
        </View>
        <View style={{flex:20,justifyContent:'center',alignItems:'center'}}>
        <Text>{'Counter: '}{this.state.counter}</Text>
        </View>
        </View>
        );
    }
}
export default counterApp