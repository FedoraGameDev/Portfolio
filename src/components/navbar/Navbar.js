import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			path: ""
		}
	}

	portfolioDropDown(e)
	{
		if (e != null)
			e.preventDefault();
		document.getElementById("portfolioDropDown").classList.toggle("active");
	}

	setCurrent()
	{
		let navButtons = document.getElementById("Navi").getElementsByClassName("look");
		let navKeys = ["/about-me", "/portfolio", "/contact"];

		navKeys.forEach((element, index) =>
		{
			if (this.state.path.includes(element))
				navButtons[index].classList.add("current");
			else
				navButtons[index].classList.remove("current");
		});

		if (document.getElementsByClassName("active").length > 0)
			this.portfolioDropDown(null);
	}

	listenScrollEvent(e)
	{
		let navi = document.getElementById("Navi");
		let height = navi.offsetHeight;
		if (window.scrollY > height)
		{
			navi.classList.add("watch-out");
			document.getElementById("portfolioDropDown").classList.add("watch-out");
		}
		else
		{
			navi.classList.remove("watch-out");
			document.getElementById("portfolioDropDown").classList.remove("watch-out");
		}
	}

	componentDidMount()
	{
		window.addEventListener("scroll", this.listenScrollEvent);
	}

	componentWillMount()
	{
		this.props.history.listen(() =>
		{
			this.setState({ path: this.props.history.location.pathname });
		})
	}

	componentDidUpdate()
	{
		this.setCurrent();
	}

	render()
	{
		return ([
			<nav key="1" className="navi" id="Navi">
				<div className="look"><Link to="/about-me">About Me</Link></div>
				<div className="look"><a onClick={ this.portfolioDropDown }>Portfolio</a></div>
				<div className="look"><Link to="/contact">Contact</Link></div>
				<div className="look smaller"><Link to="/about-me">A</Link></div>
				<div className="look smaller"><a onClick={ this.portfolioDropDown }>P</a></div>
				<div className="look smaller"><Link to="/contact">C</Link></div>
			</nav>,
			<div key="2" className="portfolio-drop-down" id="portfolioDropDown">
				<div className="look"><Link to="/portfolio/web">Web</Link></div>
				<div className="look"><Link to="/portfolio/unity">Unity</Link></div>
			</div>
		]);
	}
}

export default withRouter(Navbar);