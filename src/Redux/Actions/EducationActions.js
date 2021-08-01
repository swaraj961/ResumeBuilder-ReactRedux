import * as ActionTypes from './ActionTypes';


export const addEducation=(educationSection)=>{


    return {

        type:ActionTypes.ADD_EDUCATION,
        payload: educationSection,
    }


}

export const updateEducation=(educationSection)=>{


    return {

        type:ActionTypes.UPDATE_EDUCATION,
        payload: educationSection,
    }


}
