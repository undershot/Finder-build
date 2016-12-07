import { browserHistory } from 'react-router';

class Auth {
	constructor(){
		console.log("auth init");
	}

	doAuth(){
		console.log(
			window._sharedData.userId
		);

		browserHistory.push( "/user" );

		window._sharedData.userId = 123;

	}
}

export default Auth;