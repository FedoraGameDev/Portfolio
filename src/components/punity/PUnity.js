import React, { Component } from 'react';
import ProjectPanel from './ProjectPanel';
import Tabs from './Tabs.png';
import Chest from './Deep/Chest.png';
import './PUnity.css';

class PUnity extends Component
{
	render() {
		return (
			<div className="content">
				{/*<ProjectPanel bgImage={ Ireena } titleText="Dawn of Fruition" to="/portfolio/unity/dof" />*/}
				<ProjectPanel bgImage={ Tabs } titleText="Tabber" to="/portfolio/unity/tabber" />
				<ProjectPanel bgImage={ Chest } titleText="Deep" to="/portfolio/unity/deep" />
				{/*<ProjectPanel bgImage={ Tabs } titleText="Scene Wrapper" to="/portfolio/unity/scenewrapper" />*/}
				{/*<ProjectPanel bgImage={ Tabs } titleText="Item System" to="/portfolio/unity/items" />*/}
				{/*<ProjectPanel bgImage={ Tabs } titleText="Inventory System" to="/portfolio/unity/inventory" />*/}
			</div>
		);
	}
}

export default PUnity;
	