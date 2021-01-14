import React from 'react';
import {Component} from "react";
import SwitchNavigator from './navigation/LoginNavigator'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/index'
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

const middleware = applyMiddleware(thunkMiddleware)
const myStore = createStore(reducer,middleware)

export default class App extends React.Component{

  render() {

    return (
        <Provider store = {myStore}>
          <SwitchNavigator />
        </Provider>

    );
  }
}