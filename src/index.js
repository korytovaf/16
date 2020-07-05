import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer/reducer";


const initialState = {
    comments: JSON.parse((localStorage.getItem('localComments'))) || [],
    newCommentText: '',
    newCommentAuthor: '',
}

const store = createStore( reducer, initialState )

ReactDOM.render(
      <Provider store = {store} >
          <App />
      </Provider>,
  document.getElementById('root')
);
