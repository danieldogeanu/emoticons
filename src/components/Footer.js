import React from 'react';
import './Footer.scss';

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
			{props.data.name}
		</a>
	);
}

function Footer() {
	return (
		<footer className="Footer">
			<p className="author">By: <Link data={author} /></p>
			<p className="mynets">Follow Me: 
				<span>{social.map((value) => <Link data={value} />)}</span>
			</p>
		</footer>
	);
}

export default Footer;