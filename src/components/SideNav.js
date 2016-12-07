import React, {Component} from "react";
import { Link } from 'react-router';

class SideNav extends Component {

	state = {
		menuItems: [
			{href: "/user/pets", label: "Мои животные", icon: "paw"},
			{href: "/user/losts", label: "Потеряшки", icon: "message-alert"},
			{href: "/user/photers", label: "Фотоохотники", icon: "star"},
			{href: "/user/gallery", label: "Галерея", icon: "burst-mode"},
			{divider: true},
			{href: "/user/help", label: "Помощь", icon: "help"},
		]
	};

	render(){
		// console.log(this.props)
		return <div className="container__side wrapper__clear">
			<ul className="container__side-nav">
				{this.state.menuItems.map( (value, index) => {
					if( value.divider ) return <li key={index} className="item__divider"></li>;

					return (
						<li key={index} className="item__side-nav">
							<Link to={value.href} className="link__side-nav" activeClassName="active">
								<i className={`mdi mdi-${value.icon}`}/>
								{value.label}
							</Link>
						</li>
					);
				} )}
			</ul>
		</div>
	}
}

export default SideNav;