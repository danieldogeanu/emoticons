import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';
import Icon from '../elements/Icon';
import { animateCSS } from '../animate';
import '../styles/components/CopyButton.scss';

class CopyButton extends Component {
	constructor(props) {
		super(props);
		this.state = {isCopied: false};
		this.copyBtn = React.createRef();
	}

	onSuccess = () => {
		const currCopyBtn = this.copyBtn.current.element;
		this.setState({isCopied: true});
		currCopyBtn.classList.add('copied');
		setTimeout(() => {
			this.setState({isCopied: false});
			if (currCopyBtn.classList.contains('copied')) {
				currCopyBtn.classList.remove('copied');
			}
		}, 1500);

		this.SelectedScreen.innerHTML = this.props.data;
		animateCSS(this.SelectedScreen, 'fadeInOut');
		this.SelectedScreen.classList.add('show');
		setTimeout(() => {
			this.SelectedScreen.classList.remove('show');
		}, 1000);
	}

	componentDidMount() {
		this.SelectedScreen = document.querySelector('.SelectedScreen');
	}

	render() {
		return (
			<Clipboard
				ref={this.copyBtn}
				onSuccess={this.onSuccess}
				className={'CopyButton ' + this.props.className}
				data-clipboard-text={this.props.data}
				data-testid="CopyButton">
				{this.props.children ? this.props.children : (
					this.state.isCopied ? (<Icon name="check" />) : 'Copy'
				)}
			</Clipboard>
		);
	}
}

export default CopyButton;
