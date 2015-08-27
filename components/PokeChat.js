//Modules

import React from 'react/addons';
import PokeMessage from './PokeMessage';

const { CSSTransitionGroup } = React.addons;

export default class PokeChat extends React.Component {
	render() {
		return <ul className="PokeChat">
			<CSSTransitionGroup transitionName="Message-animation" >
				{
					this.props.messages.map((message) => {
						return <PokeMessage key={message.id} message={message} />
					})
				}
			</CSSTransitionGroup>
		</ul>
	}
}

PokeChat.defaultProps = { messages: [] }