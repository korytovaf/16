import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {AddCommentReducer} from "./reducer/AddCommentReducer";


const initialState = {
    // comments: JSON.parse((localStorage.getItem('localMessages'))) || [],
    newCommentText: '',
    newCommentAuthor: '',
}

const store = createStore( AddCommentReducer, initialState )

ReactDOM.render(
      <Provider store = {store} >
          <App />
      </Provider>,
  document.getElementById('root')
);
