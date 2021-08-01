import * as Actiontypes from '../Actions/ActionTypes'
import intitialState from './initialState.json';

export default educationReducers=(state=intitialState.educationSection, action)=>{


    switch(action.type){

        // need not to copy the initial state in edu or contact as they are null are we are returning directly obj

        case Actiontypes.ADD_EDUCATION:  return {...action.payload}   


        case Actiontypes.UPDATE_EDUCATION : return {...action.payload}


        default : return state


    }




}
