
class Auth {
	constructor(){
		console.log("auth init");
	}

	doAuth(){
		console.log("do auth!");
		location.href = "/user"
	}
}

export default Auth;