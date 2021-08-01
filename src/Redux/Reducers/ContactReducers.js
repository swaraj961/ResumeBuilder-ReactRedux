import * as  ActionTypes from '../Actions/ActionTypes' ;
import initialState from './initialState.json';

export default setContact= (state=initialState.contactSection,action)=>{


    switch(action.type){


     case ActionTypes.ADD_CONTACT : return {...action.payload}     // obj return directly

     case ActionTypes.UPDATE_CONTACT : return {...action.payload}   

     default : return state;


    }


}

