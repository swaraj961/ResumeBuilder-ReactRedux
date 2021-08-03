import { combineReducers } from "redux";
import contactReducers from '../Reducers/ContactReducers'
import documentReducers from "../Reducers/DocumentReducers";
import educationReducers from "../Reducers/EducationReducers";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import AuthReducers from "../Reducers/AuthReducers";
import initialState from '../Reducers/initialState.json'
import * as ActionTypes from '../Actions/ActionTypes'

const appReducers = combineReducers({
    firestore: firestoreReducer,
    firebase : firebaseReducer,
    document: documentReducers,
    contactSection : contactReducers,
    educationSection: educationReducers,
    auth: AuthReducers

})


export const rootReducers=(state=initialState, action)=>{

    if(action.type==ActionTypes.SIGN_OUT ){

      state=undefined //clear all the user data 


    }

    return appReducers(state,action) 

}

export default rootReducers;