import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectPanel extends Component
{
    render() {
		return (
            <Link to={ this.props.to }>
                <div className="project-panel" style={{ "backgroundImage": "url(" + this.props.bgImage + ")" }}>
                    <div className="background">
                        <div className="stuff">
                            <div className="layout">
                                { this.props.titleText }
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
		);
	}
}

export default ProjectPanel;
	