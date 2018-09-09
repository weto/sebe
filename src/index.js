import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {applyMiddleware, combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import EnadeReducer from './componentes/redux/EnadeReducer'

const reducers = combineReducers({
	enade: EnadeReducer,
});
const store = applyMiddleware(thunk,multi,promise)(createStore)(reducers)

ReactDOM.render(
	(
		<Provider store={store}>
		<App />
		</Provider>
	),
  document.getElementById('root')
);
