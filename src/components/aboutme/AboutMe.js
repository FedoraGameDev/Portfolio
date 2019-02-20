import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component
{
	render() {
		return (
			<div className="content thin">
				<center><h2>A problem is simply a puzzle yet to be solved.</h2></center>
				<div>
					Ever since I played Zelda: Ocarina of Time as a child, I knew I wanted to be a game developer.
					I started the long journey into development in 2011 when I attended the Center for Advanced Research and Technology, taking the Interactive Game Design class.
					I have spent these years learning the craft and broadening my horizons, branching out into web development, as well.
					My passion for programming originated from my love for solving puzzles, and I aim to improve my skills continually.
				</div>
			</div>
		);
	}
}

export default AboutMe;