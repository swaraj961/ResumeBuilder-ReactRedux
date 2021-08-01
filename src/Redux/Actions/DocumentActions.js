import * as ActionTypes from './ActionTypes';
import { v4 as uuidv4 } from 'uuid';

//initially provide a document id, on skinselection => skinid and onskinupdate selection => new skinid
// creating actionCreators 

export const setSkinCd =(skinCdId)=>{


    let uid  = uuidv4(); // first time only set the docid of a document

    // return action Type and payload 
    return {

        type: ActionTypes.SET_SKIN,
        payload:{id: uid, skinCd:skinCdId}

    }


}

export const updateSkinCd=(skinCdId)=>{

    return {

        type: ActionTypes.UPDATE_SKIN,
        payload: {
            skinCd :skinCdId
        }

    }


}






