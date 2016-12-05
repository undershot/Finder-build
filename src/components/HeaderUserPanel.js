import React, {Component} from "react";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from "../components/MenuItem";
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

// console.log(EnhancedButton.propTypes)

/*EnhancedButton.defaultProps.disableTouchRipple = true;
EnhancedButton.defaultProps.disableFocusRipple = true;*/

class HeaderUserPanel extends Component {
	state = {
		menuOpened: false,
		userName: "Артем Васильев",
		userAvatar: "https://pp.vk.me/c636427/v636427726/34774/JLph9spYMrI.jpg"
	};

	handleOnRequestChange(){
		console.log("opened");
	}

	handleOpenMenu(){
		this.setState({
			menuOpened: true
		});
	}

	render(){
		//disableTouchRipple={true}
		return (
			<div className="wrapper__header-user-panel wrapper__clear" onClick={this.handleOpenMenu.bind(this)}>

				<div className="image__user-avatar">
					<img src={this.state.userAvatar} alt=""/>
				</div>

				<div className="caption__header-username">
					{this.state.userName}
					<IconMenu
						iconButtonElement={<IconButton className="mdi--faded"></IconButton>}
						anchorOrigin={{horizontal: 'right', vertical: 'top'}}
						targetOrigin={{horizontal: 'right', vertical: 'top'}}
						open={this.state.menuOpened}
					    className="icon__header-user-panel"
					>
						<MenuItem value="1" primaryText="Мой профиль" />
						<MenuItem value="2" primaryText="Настройки" />
						<Divider />
						<MenuItem value="3" primaryText="Выйти" />
					</IconMenu>

					<i className="mdi mdi-menu-down mdi__menu-open"/>
				</div>
			</div>
		);
	}
}

export default HeaderUserPanel;