import React from 'react';
import Icon from '../elements/Icon';
import '../styles/components/Footer.scss';

const author = { name: 'Daniel Dogeanu', url: 'https://danieldogeanu.com' };
const social = [
	{ name: 'Twitter', url: 'https://twitter.com/danieldogeanu' },
	{ name: 'GitHub', url: 'https://github.com/danieldogeanu' },
	{ name: 'Behance', url: 'https://behance.net/danieldogeanu' },
];

function Link(props) {
	return (
		<a href={props.data.url}
			target="_blank"
			rel="noopener noreferrer">
			{props.social ? (
				<span className="mynet">
					<span className="show-for-screen-reader">{props.data.name}</span>
					<Icon name={props.data.name.toLowerCase()} />
				</span>
			) : (props.data.name)}
		</a>
	);
}

function Footer() {
	return (
		<footer className="Footer">
			<p className="author">By: <Link data={author} /></p>
			<p className="mynets">
				<span className="folw">Follow Me: </span>
				<span className="wrapper">
					{social.map((value) => {
						return <Link key={value.name.toLowerCase()} data={value} social={true} />;
					})}
				</span>
			</p>
		</footer>
	);
}

export default Footer;
