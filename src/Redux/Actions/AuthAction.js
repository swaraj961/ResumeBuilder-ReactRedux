import * as ActionTypes from "./ActionTypes";

export const signInRequest = () => {
  return {
    type: ActionTypes.SIGN_IN_REQUEST,
  };
};

export const signInSuccess = () => {
  return {
    type: ActionTypes.SIGN_IN_SUCCESS, // remove all data out user from every section 
  };
};

export const signInFailed = (error) => {
  return {
    type: ActionTypes.SIGN_OUT_FAILED,
    payload: error,
  };
};

export const SignOutRequest = () => {
  return {
    type: ActionTypes.SIGN_OUT_REQUEST,
  };
};

export const SignOutSuccess = () => {
  return {
    type: ActionTypes.SIGN_OUT_SUCCESS,
  };
};

export const SignOutFailed = (error) => {
  return {
    type: ActionTypes.SIGN_OUT_FAILED,  
    payload: error,
  };
};

export const removeError = () => {
  return { type: ActionTypes.REMOVE_ERROR };
};

// Thunk
export const signIN = (userData) => {
  return async (dispatch,getState, { getFirebase, getFirestore }) => {
    dispatch(signInRequest()); // to show loading basically

    console.log("triggered sign")
    const firebase = getFirebase(); //creating instance

    try {
      let data = await firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);
      dispatch(signInSuccess());
    } catch (e) {
      dispatch(signInFailed(e));
      setTimeout(() => {
        dispatch(removeError());
      }, 2000);
    }
  };
};

export const registerRequest = () => {
  return {
    type: ActionTypes.REGISTER_REQUEST,
  };
};

export const registerSuccess = () => {
  return {
    type: ActionTypes.REGISTER_SUCCESS,
  };
};

export const registerFailed = (error) => {
  return {
    type: ActionTypes.REGISTER_FAILED,
    payload: error,
  };
};


// thunk doing with promise this time
export const registerUser = (userData) => {
  return async (dispatch, getState,{ getFirebase, getFirestore }) => {
    dispatch(registerRequest());
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password).then(async (data) => {
        const res = await firestore.collection("users").doc(data.user.uid).set({
          email: userData.email,
          resumeIds: [],
        });
        dispatch(registerSuccess());
      })
      .catch((error) => {
        dispatch(registerFailed(error));

        setTimeout(() => {
          dispatch(removeError());
        }, 2000);
      });
  };
};

// SignOut

export const signOut = () => {
 
  return async (dispatch,getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    dispatch(SignOutRequest());

    firebase.auth().signOut().then(() => {
        
        dispatch({type:ActionTypes.SIGN_OUT}); // call back to invoke
      })
      .catch((error) => {
        dispatch(SignOutFailed(error));
      });
  };
};
