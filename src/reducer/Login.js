// @flow
 import type {LoginState} from '../definitions/ReduxStore'
 import {actions} from '../actios/Login'

 export default function(state:LoginState={},action:any):LoginState{
     switch(action.type){
         case actions.LOGIN_FLOW_START:
            console.log("reducer/login:LoginFlowstart")
            return state
        default:
            return state  
     }
 }