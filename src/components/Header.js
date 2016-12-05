import React from "react";
import SearchInsight from "./SearchInsight";
import HeaderUserPanel from "./HeaderUserPanel";


let Header = () => (
	<div className="container__header ">
		<div className="wrapper__insight wrapper__clear">
			<a href="#" className="link__logo-min"></a>

			<SearchInsight />

			<HeaderUserPanel />
		</div>
	</div>
);


export default Header;