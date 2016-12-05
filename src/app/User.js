import React, {Component} from "react";
//import getMuiTheme from "material-ui/styles/getMuiTheme";
// import RaisedButton from 'material-ui/RaisedButton';
import '../components/Styles';
import "../assets/css/Insight.css";

import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";

let User = () => (
			<div className="wrapper__app">
				<div className="container__insight-bg">
					<Header />


					<div className="container__content wrapper__insight wrapper__clear">
						<SideNav />

						<PageContent />
					</div>


				</div>

				<Footer />
			</div>
);

export default User;