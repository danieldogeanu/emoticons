import React, { Component } from 'react';
import Icon from '../elements/Icon';
import { animateCSS } from '../animate';

class ShortcutsClose extends Component {
	handleClick = () => {
		animateCSS(this.ShortcutsScreen, 'fadeOut');
		this.ShortcutsButton.classList.remove('hide');
		setTimeout(() => {
			this.ShortcutsScreen.classList.remove('show');
			this.ShortcutsScreen.classList.remove('animated', 'fadeIn', 'fadeOut');
		}, 290);
	}

	componentDidMount() {
		this.ShortcutsScreen = document.querySelector('.ShortcutsScreen');
		this.ShortcutsButton = document.querySelector('.ShortcutsButton');
	}

	render() {
		const shortcutsCloseText = 'Close Shortcuts Screen';
		return (
			<button className="ShortcutsClose"
				title={shortcutsCloseText}
				onClick={this.handleClick}>
				<span className="show-for-screen-reader">
					{shortcutsCloseText}
				</span>
				<Icon name="close" />
			</button>
		);
	}
}

export default ShortcutsClose;
