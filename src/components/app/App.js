import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar, Contact, AboutMe, PUnity, PWeb, DoF, Tabber, Items } from '../';
import './App.css';

class App extends Component
{
	renderRedirectToHome()
	{
		if (window.location.pathname === "/")
			return(<Redirect to="/about-me"/>);
		else
			return (<span/>);
	}

	render() {
		return (
			<div className="App">
				<header>
					<Navbar />
				</header>
				<main>
					<this.renderRedirectToHome />
					<Switch>
						<Route path="/about-me" 		  		 render={ () => <AboutMe /> } />
						<Route path="/portfolio/web"	  		 render={ () => <PWeb /> } />
						<Route path="/portfolio/unity/dof"		 render={ () => <DoF /> } />
						<Route path="/portfolio/unity/tabber" 	 render={ () => <Tabber /> } />
						<Route path="/portfolio/unity/items" 	 render={ () => <Items /> } />
						<Route path="/portfolio/unity"	  		 render={ () => <PUnity /> } />
						<Route path="/contact" 			  		 render={ () => <Contact /> } />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
	