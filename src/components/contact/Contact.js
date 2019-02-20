import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component
{
	render() {
		return (
			<div className="content no-in-line thin">
				<div className="title">Contact</div>
				<div className="description"><center>Email: <a href="mailto:jimmy.satt@gmail.com" target="_top">jimmy.satt@gmail.com</a></center></div>
				<div className="dexcription"><center>Phone: 503-984-4019</center></div>
			</div>
		);
	}
}

export default Contact;
	