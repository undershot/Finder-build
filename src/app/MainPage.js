import React, {Component} from "react";
//import getMuiTheme from "material-ui/styles/getMuiTheme";
import RaisedButton from "../components/RaisedButton";

//import CircularProgress from 'material-ui/CircularProgress';

import Logo from "../assets/img/logo.png";
import LogoBg from "../assets/img/logo-bg.png";

// import "../assets/css/MainPage.css";
import ImgWithStatus from "../components/ImageWithStatus";

import Auth from "../components/Classes/Auth";


class MainPage extends Component {
	constructor(props){
		super(props);
		this.state = {

		};

	}

	handleLoginForm() {
		let auth = new Auth();

		auth.doAuth();
	}


	render(){
		return <div className="container__main">
			<div className="container__logo">
				<a href="/" className="container__logo-image">
					<ImgWithStatus src={LogoBg} className="container__logo-bg" />
					<ImgWithStatus src={Logo} className="container__logo-inside" />
				</a>
				<div className="block_spacer"></div>
				<h1 className="typography__logo">Ищейка</h1>
				<div className="typography__tagline">Найдем любую суку!</div>

				<div className="block_spacer block_spacer-80"></div>

				<RaisedButton label="Войти" className="mdl-button__primary--edited mdl-button__login" onTouchTap={this.handleLoginForm}/>

			</div>
		</div>
	}
}

export default MainPage;