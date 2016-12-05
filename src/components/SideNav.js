import React, {Component} from "react";

class SideNav extends Component {

	render(){
		return <div className="container__side wrapper__clear">
			<ul className="container__side-nav">
				<li className="item__side-nav">
					<a href="/user/pets" className="link__side-nav active">
						<i className="mdi mdi-paw"/>
						Мои животные
					</a>
				</li>
				<li className="item__side-nav">
					<a href="/user/losts" className="link__side-nav">
						<i className="mdi mdi-message-alert"/>
						Потеряшки
					</a>
				</li>
				<li className="item__side-nav">
					<a href="/user/losts" className="link__side-nav">
						<i className="mdi mdi-star"/>
						Фотоохотники
					</a>
				</li>
				<li className="item__side-nav">
					<a href="/user/losts" className="link__side-nav">
						<i className="mdi mdi-burst-mode"/>
						Галерея
					</a>
				</li>

				<li className="item__divider"></li>

				<li className="item__side-nav">
					<a href="/user/losts" className="link__side-nav">
						<i className="mdi mdi-help"/>
						Помощь
					</a>
				</li>
			</ul>
		</div>
	}
}

export default SideNav;