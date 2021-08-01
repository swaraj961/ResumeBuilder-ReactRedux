import initialState from './initialState.json'
import * as ActionTypes from '../Actions/ActionTypes';

export default function documentReducers(state=initialState.document, action){

    switch(action.type){


        case ActionTypes.SET_SKIN : return {...state, id:action.payload.id, skinCd:action.payload.skinCd }

        case ActionTypes.UPDATE_SKIN : return {...state, skinCd:action.payload.skinCd}


        default : return state;


    }



}