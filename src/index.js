/* React Part

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/


/* Redux tutorials
*/
const redux = require('redux') 

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICE_CREAM,
        info: 'Second Action'
    }
}

const initialState = {
    numOfCakes: 10,
    numOfIcreCream: 20
}

const reducer = (state = initialState, action ) =>{
    switch (action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        case BUY_ICE_CREAM: return{
            ...state,
            numOfIcreCream: state.numOfIcreCream-1
        }
        default: return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
console.log("initial state",store.getState());

const unsubscribe = store.subscribe(()=> console.log('Updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())

unsubscribe();