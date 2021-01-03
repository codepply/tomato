import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faCheckCircle,
	faBullseye,
	faCog,
	faChartBar,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
	render() {
		return (
			<div className='nav-container'>
				<div className='nav'>
					<h1 className='logo'>
						<NavLink exact to='/'>
							<FontAwesomeIcon className='icon' icon={faCheckCircle} />
							Pomojuice
						</NavLink>
					</h1>
					<div className='nav-links'>
						<span className='nav-link'>
							<FontAwesomeIcon className='icon' icon={faBullseye} />
							Goals
						</span>
						<span className='nav-link'>
							<FontAwesomeIcon className='icon' icon={faCog} />
							Settings
						</span>
						<span className='nav-link'>
							<NavLink to='/report'>
								<FontAwesomeIcon className='icon' icon={faChartBar} />
								Report
							</NavLink>
						</span>
						<span className='nav-link'>
							<FontAwesomeIcon className='icon' icon={faUser} />
							Login
						</span>
					</div>
				</div>
			</div>
		);
	}
}
