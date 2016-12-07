import React, { Component } from 'react';
import App from "./App";
import MainPage from "./app/MainPage";
import User from "./app/User";
import UserPets from "./app/UserPets";
import UserLosts from "./app/UserLosts";
import NotFound from "./app/NotFound";
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';


class AppRouter extends Component {
	render(){
		/*this.props.globalStore.dispatch({
			type: "ADD_TRACK",
			payload: "13 23 12312 3"
		});*/

		return (

		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={MainPage} />
				<Route path="user" component={User}>
					<IndexRedirect to="pets" />
					<Route path="pets" component={UserPets}/>
					<Route path="losts" component={UserLosts}/>
					<Route path="photers" component={UserPets}/>
					<Route path="gallery" component={UserPets}/>
					<Route path="help" component={UserPets}/>
				</Route>
			</Route>
			<Route path='*' component={NotFound} />

		</Router>

		);
	}
}

export default AppRouter