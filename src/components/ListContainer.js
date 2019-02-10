import React, { Component } from 'react';
import { DesktopListItem } from './ListItem';
import '../styles/components/ListContainer.scss';

class ListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			availableHeight: 0,
			scrollTop: 0,
		}
		this.list = React.createRef();
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		this.setState({availableHeight: this.list.clientHeight});
	}

	handleScroll(event) {
		this.setState({scrollTop: event.target.scrollTop});
	}

	render() {
		const data = this.props.data;

		const numRows = data.length;
		const rowHeight = 50; // TODO: Find a way to calculate rowHeight dynamically.
		const totalHeight = rowHeight * numRows;

		const {availableHeight, scrollTop} = this.state;
		const scrollBottom = scrollTop + availableHeight;

		const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - 40);
		const endIndex = Math.min(numRows, Math.ceil(scrollBottom / rowHeight) + 40);

		const items = [];

		let index = startIndex;
		while (index < endIndex) {
			items.push(<DesktopListItem key={index} data={data[index]} />);
			index++;
		}		

		return (
			<div className="ListContainer"
				onScroll={this.handleScroll}
				ref={list => this.list = list}>
				<ul style={{
					paddingTop: (startIndex * rowHeight),
					height: totalHeight,
				}}>
					{items}
				</ul>
			</div>
		);
	}
}

export default ListContainer;