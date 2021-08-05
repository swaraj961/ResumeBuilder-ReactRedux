import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Redux/Root/RootReducers';
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';


var firebaseConfig = {
  apiKey: "AIzaSyAmaCYclH5NLiyoU1yCiLCfRH4shSsYW28",
  authDomain: "resume-builder-a6ac7.firebaseapp.com",
  projectId: "resume-builder-a6ac7",
  storageBucket: "resume-builder-a6ac7.appspot.com",
  messagingSenderId: "915249313114",
  appId: "1:915249313114:web:71ae9dbfe155d0cfc2af63"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const reduxStore = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),  // we want these two rather than dispatch to get instane of firebase & store with thunk
    reduxFirestore(firebase) // redux bindings for firestore, as it doesnt work properly 
  )
);

/*Our requirements 
1) firebase and firestone all in store rest thing we are explicitly defining 
2) with thunk we also want the instance of firebase and firestone */



ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <ReactReduxFirebaseProvider // wrapper to handle firebase and firestore in store intance and initiase it
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}
      >
      <App />
    </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);