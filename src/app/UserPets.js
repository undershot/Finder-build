import React, {Component} from "react";
import ImageList from "../components/ImageList";


class UserPets extends Component{
	constructor( props ){
		super(props);

		this.state = {
			imageListObject: [
				{
					id: 1,
					href: "/pet/1",
					imageUrl: "/assets/images/image.png"
				},
				{
					id: 1,
					href: "/pet/1",
					imageUrl: "/assets/images/image.png"
				},
				{
					id: 1,
					href: "/pet/1",
					imageUrl: "/assets/images/image.png"
				},
				{
					id: 1,
					href: "/pet/1",
					imageUrl: "/assets/images/image.png"
				},
				{
					id: 1,
					href: "/pet/1",
					imageUrl: "/assets/images/image.png"
				},
				{
					id: 1,
					href: "/pet/1",
					imageUrl: "/assets/images/image.png"
				},
				{
					id: 1,
					href: "/pet/1",
					imageUrl: "/assets/images/image.png"
				}
			]
		};

	}

	render(){
		return (
			<div>
				<ImageList list={this.state.imageListObject} />
			</div>
		);
	}
}

export default UserPets;