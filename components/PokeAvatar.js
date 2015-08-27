//Modules

import React from 'react'

export default class PokeAvatar extends React.Component {
	render() {
		var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
		return <div className="Avatar-container">
			<img src={url} className="Avatar" />
		</div>
		
	}
}