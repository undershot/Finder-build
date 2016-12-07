import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
import AppRouter from "./AppRouter";

injectTapEventPlugin();

ReactDOM.render(
		<AppRouter />
	,
  document.getElementById('finder-app')
);