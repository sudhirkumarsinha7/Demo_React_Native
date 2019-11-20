/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './Screens/login.js'

// const App = () => {
//   return (
//     <Login/>
//   );
// }
// export default App
export default class App extends Component{
    state={
      counter:0
    }
    increamentConter=()=>{
      this.setState({counter:this.state.counter+1})
      alert(this.state.counter)
    }
    decreamentCounter=()=>{
      this.setState({counter:this.state.counter-1})
      alert(this.state.counter)
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



//export default App;
