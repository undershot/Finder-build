import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
	componentDidMount(){
		console.log(1);
	}
	render() {
		return (
			<div className='container'>
				Страница не найдена. Вернуться на <Link to='/'>главную</Link>
			</div>
		)
	}
}