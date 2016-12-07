import React, {Component} from "react";



class PageContent extends Component {
	render(){
		return (
			<div className="container__page-content">
				{this.props.children}
			</div>
		);
	}
}

export default PageContent;