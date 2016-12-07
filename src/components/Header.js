import React from "react";
import SearchInsight from "./SearchInsight";
import HeaderUserPanel from "./HeaderUserPanel";
import {Link} from "react-router";


let Header = () => (
	<div className="container__header ">
		<div className="wrapper__insight wrapper__clear">
			<Link className="link__logo-min" to="/" />

			<SearchInsight />

			<HeaderUserPanel />
		</div>
	</div>
);


export default Header;