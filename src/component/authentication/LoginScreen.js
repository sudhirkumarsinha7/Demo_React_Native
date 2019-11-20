//@flow
import React,{Component} from 'react'
import {
        View,
        Text,
        StyleSheet,
        Button
} from 'react-native'
import { Container,Left,Right,Body,Title, Header, Content, Form, Item, Input,Footer } from 'native-base';
import helloSaga from '../../sagas/saga'
export default class LoginScreen extends Component<Props, State>{
        constructor (props){
        super(props)
        this.state={
                email: '',
                password:'',
         }
        }
render() {
   return (
      <Container>
        <Header>
        <Left/>
          <Body>
            <Title>LogIn screen</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button
          title="Login"
          color="#f194ff"
          onPress={() => alert('Simple Button pressed')}
        />
        </Content>
        <Footer />
      </Container>
    );
  
}
       
}
