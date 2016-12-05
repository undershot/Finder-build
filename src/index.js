import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
import AppRouter from "./AppRouter";
/*
import {Provider} from "react-redux";
import {createStore} from "redux";
*/

injectTapEventPlugin();
/*
const initialState = [
	"my name",
	"is zhorik"
];

function globalStoreReducer(state = initialState, action) {
	if( action.type == "ADD_TRACK"){
		return [...state, action.payload];
	}
	return state;
}

const globalStore = createStore( globalStoreReducer );*/

ReactDOM.render(
		<AppRouter />
	,
  document.getElementById('finder-app')
);