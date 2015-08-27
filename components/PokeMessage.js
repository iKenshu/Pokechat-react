//Modules

import React from 'react'

export default class PokeMessage extends React.Component{
	render(){
		return <li className="PokeMessage">
			{this.props.message.text}
		</li>
	}
}