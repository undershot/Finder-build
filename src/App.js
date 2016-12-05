import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './components/Styles';

const muiTheme = getMuiTheme({

});

class App extends Component {
	render() {
		return <MuiThemeProvider muiTheme={muiTheme}>
				{this.props.children}
			</MuiThemeProvider>;
	}
	componentDidMount() {
		console.log("App is Ready");
	}

	componentWillUnmount() {
		console.log("APP is fff");
	}
}

export default App;