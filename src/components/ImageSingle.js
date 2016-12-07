import React, {Component} from "react";
import ImageWithStatus from "./ImageWithStatus";
import {Link} from "react-router";

class ImageSingle extends Component {

	render(){

		return (
			<div className="item__image-list-single">
				<Link to={this.props.href} className={this.props.className ? ["item__image-list-link",this.props.className].join(" ") : "item__image-list-link"}>
					<ImageWithStatus {...this.props}/>
					<div className="container__image-list-overlay">

					</div>
				</Link>
			</div>
		);

	}
}

export default ImageSingle;