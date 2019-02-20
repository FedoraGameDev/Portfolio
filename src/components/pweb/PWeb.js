import React, { Component } from 'react';
import './PWeb.css';

class PWeb extends Component
{
	render() {
		return (
			<div className="content no-in-line">
				<div className="description">
					This site is a work in progress. It uses React and LESS to make up a front end, and lacks any backend as data was not necessary.
					It is hosted on Heroku with the codebase being stored on Github.
				</div>
				<div className="portLink"><a target="_blank" href="https://github.com/FedoraGameDev/Portfolio">Github</a></div>
			</div>
		);
	}
}

export default PWeb;
	