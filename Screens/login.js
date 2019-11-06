import React, { Component } from 'react';
import {SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,} from 'react-native';
    import {
        Header,
        LearnMoreLinks,
        Colors,
        DebugInstructions,
        ReloadInstructions,
      } from 'react-native/Libraries/NewAppScreen';
      
export default class Login extends Component{
    render(){
        return (
            
            
            <View style={{flex:9,}}>
                <View style={{flex:1,borderWidth:1}}>
                     <Text style={styles.textHeader}>Hello World</Text>
                </View>
                <View style={{flex:1,borderWidth:1}}>
                    
                    <View style={{flex: 0.3,borderWidth:1,flexDirection:"row", borderColor:'#76909D'}}>
                        <Text>Email</Text>
                        <TextInput
                                placeholder="Email"
                                placeholderTextColor="#999999"
                                keyboardType="email-address"
                                autoCapitalize = "none"
                                returnKeyType={"next"}
                                // onSubmitEditing={() => {
                                //     this.focusNextField('password');
                                // }}
                                // onChangeText={email => this.setState({ email })}
                                // onFocus={() => { this.setState({emailFocused:true,})}}
                                // onBlur={() => { this.setState({emailFocused:false,})}}
                                // // Making the Under line Transparent.
                                 underlineColorAndroid='transparent'
                                // style={[internalStyles.textEntry, {borderBottomColor:this.state.emailFocused?global.colorBlue:'#bbbbbb',}]}
                            />
                    </View>
            
                    <View style={{flex: 0.3,borderWidth:1, borderColor:'#76909D'}}>
                        <TextInput
                                placeholder="Password"
                                placeholderTextColor="#999999"
                                keyboardType="Password"
                                autoCapitalize = "none"
                                returnKeyType={"next"}
                                // onSubmitEditing={() => {
                                //     this.focusNextField('password');
                                // }}
                                // onChangeText={email => this.setState({ email })}
                                // onFocus={() => { this.setState({emailFocused:true,})}}
                                // onBlur={() => { this.setState({emailFocused:false,})}}
                                // // Making the Under line Transparent.
                                 underlineColorAndroid='transparent'
                                // style={[internalStyles.textEntry, {borderBottomColor:this.state.emailFocused?global.colorBlue:'#bbbbbb',}]}
                            />
                    
                    </View>
                </View>
                    
                <View style={{flex:1,borderWidth:1}}>
                </View>
            
            </View>

        );
        
    }
}
const styles = StyleSheet.create({
    textHeader: {
      fontSize: 40,
      fontWeight: '600',
      textAlign: 'center',
      color: 'black',
    },
  });
