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
import CounterApp from './src/component/screen/counterApp'
// const App = () => {
//   return (
//     <Login/>
//   );
// }
// export default App
export default class App extends Component{
  render(){
    return(
      <CounterApp/> 
    );
  }
      
}



//export default App;
