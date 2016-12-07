import React, {Component} from "react";
//import getMuiTheme from "material-ui/styles/getMuiTheme";
// import RaisedButton from 'material-ui/RaisedButton';
import '../components/Styles';
import "../assets/css/Insight.css";

import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";

class User extends Component{
	componentWillMount(){
		// if(  )
		// location.href = "/user/pets";
		console.log(location.href)
	}

	componentWillUnmount(){
		// if(  )
		// location.href = "/user/pets";
		console.log(location.href)
	}

	render(){
		return (
			<div className="wrapper__app">
				<div className="container__insight-bg">
					<Header />

					<div className="container__content wrapper__insight wrapper__clear">
						<SideNav />

						<PageContent>
							{this.props.children}
						</PageContent>

					</div>


				</div>

				<Footer />
			</div>
		);
	}
}


export default User;