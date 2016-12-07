import React, {Component} from "react";
import ImageSingle from "./ImageSingle";

class ImageList extends Component {
	state = {};

	constructor( props ){
		super( props );

		console.log(
			this.state,
			props
		);
	}

	componentWillMount(){

	}

	render(){


		return (
			<div className={this.props.className ? ["container__image-list",this.props.className].join(" ") : "container__image-list"}>
				{this.props.list.map(( value, index ) => {
					return (
						<ImageSingle key={index} src={value.imageUrl} href={value.href} />
					);
				})}
			</div>
		);
	}

}

export default ImageList;