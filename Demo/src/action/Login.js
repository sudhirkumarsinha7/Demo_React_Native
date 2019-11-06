//@flow
export const actions={
    START_LOGIN='START_LOGIN'
} 
export type LoginFlowStartAction = {
    type:string,
    email:string,
    password:string
}

  export function loginFlowStart(email:string,password:string):LoginFlowStartAction{
      console.log('actions/Login:loginFlowStart')
      return{
          type:actions.START_LOGIN,
          email,
          password,
      },
  }
