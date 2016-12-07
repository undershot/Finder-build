import React, {Component} from "react";
import { browserHistory } from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from "../components/MenuItem";
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';

// console.log(EnhancedButton.propTypes)

/*EnhancedButton.defaultProps.disableTouchRipple = true;
EnhancedButton.defaultProps.disableFocusRipple = true;*/

let userNameHolder = <span className="holder__header-username"></span>;

class HeaderUserPanel extends Component {
	state = {
		menuOpened: false,
		userName: userNameHolder,
		userAvatar: ""
	};

	componentWillMount(){
	}

	componentDidMount(){

		// console.log(window._sharedData)
		this.setState({
			userName: "Артем Васильев",
			userAvatar: "https://pp.vk.me/c636427/v636427726/34774/JLph9spYMrI.jpg"
		});
	}

	componentWillUnmount(){
	}

	handleOnRequestClose( reason ){
		this.setState({
			menuOpened: false
		});
	}

	handleOpenMenu( event ){
		this.setState({
			menuOpened: true,
			anchorEl: event.currentTarget
		});
	}

	handleOnTouchTap( event, menuItem, index ){

		if( menuItem.props.href ) browserHistory.push( menuItem.props.href );


		this.handleOnRequestClose();
	}

	render(){
		//disableTouchRipple={true}
		// anchorEl={this.state.anchorEl}
		return (
			<div className="wrapper__header-user-panel wrapper__clear" onClick={this.handleOpenMenu.bind(this)}>

				<div className="image__user-avatar">
					<img src={this.state.userAvatar} alt=""/>
				</div>

				<div className="caption__header-username">
					<span className="label__header-username">
						{this.state.userName}
					</span>
					<Popover
						open={this.state.menuOpened}
						anchorEl={this.state.anchorEl}
						anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
						targetOrigin={{horizontal: 'right', vertical: 'top'}}
						onRequestClose={this.handleOnRequestClose.bind(this)}
					>
						<Menu
							desktop={true}
							onItemTouchTap={this.handleOnTouchTap.bind(this)}
						>
							<MenuItem value="1" href="/user/profile" primaryText="Мой профиль" />
							<MenuItem value="2" href="/user/settings" primaryText="Настройки" />
							<Divider />
							<MenuItem value="3" href="/user/logout" primaryText="Выйти" />
						</Menu>
					</Popover>


					<i className="mdi mdi-menu-down mdi__menu-open"/>
				</div>
			</div>
		);
	}
}

export default HeaderUserPanel;