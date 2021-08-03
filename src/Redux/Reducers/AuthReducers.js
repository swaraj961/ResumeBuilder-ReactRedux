import * as ActionTypes from '../Actions/ActionTypes';
import initialState from './initialState.json'

export default function AuthReducers(state=initialState.auth, action) {
    
    switch(action.type){

    // Note : no case of signout as  all we need to remove all user data and Signout state has only auth acccess in the reducers 

      case ActionTypes.SIGN_IN_FAILED: return{...state,ErrorMessage:action.payload,loading:false} 

      case ActionTypes.SIGN_IN_REQUEST : return {...state, loading:true}

      case ActionTypes.SIGN_IN_SUCCESS : return {...state,loading:false }

      case ActionTypes.SIGN_OUT_FAILED : return {...state,ErrorMessage:action.payload, loading:false}

      case ActionTypes.REMOVE_ERROR : return{...state,ErrorMessage:"",}

      case ActionTypes.REGISTER_REQUEST: return {...state,loading:true}

      case ActionTypes.REGISTER_REQUEST :return {...state, loading:false}

      case ActionTypes.REGISTER_SUCCESS : return {...state, loading: false}

      case ActionTypes.REGISTER_FAILED : return {...state, loading:false, ErrorMessage: action.payload}

       default : return state;

    }

}
