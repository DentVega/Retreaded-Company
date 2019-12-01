import {applyMiddleware, createStore, compose} from 'redux'
import mainReducer from '../reducers/index.reducer';
import {logger} from "redux-logger";
import thunk from 'redux-thunk';
import firebase from 'firebase/app'
const initialState = {};

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
firebase.initializeApp(firebaseConfig);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // development
//const composeEnhancers = compose; // build

export const store = createStore(
    mainReducer, initialState,
    composeEnhancers(applyMiddleware(logger, thunk))
);
