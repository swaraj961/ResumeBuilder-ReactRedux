import { combineReducers } from "redux";
import contactReducers from '../Reducers/ContactReducers'
import documentReducers from "../Reducers/DocumentReducers";
import educationReducers from "../Reducers/EducationReducers";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const  rootReducers = combineReducers({
    firestore: firestoreReducer,
    firebase : firebaseReducer,
    document: documentReducers,
    contactSection : contactReducers,
    educationSection: educationReducers,    

})

export default rootReducers;