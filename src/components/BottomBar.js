// Libraries
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// UI
import { Navbar } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

// Data
import config from "../config";

const BottomBar = () => {
	// Media queries
	const mobile = useMediaQuery({
		query: "(max-width: 1024px)",
	});

	// Template
	const tabs = config.navigation.tabs;

	return mobile ? (
		<Navbar
			bg="white"
			variant="light"
			fixed="bottom"
			className="shadow justify-content-center"
		>
			<nav className="navbar-nav d-flex">
				{tabs.map(({ Icon, title, path }, index) => (
					<NavLink key={index} className="nav-link p-0" to={path} exact>
						<div className="text-center ml-3 mr-3">
							{Icon ? (
								<div className="icon">
									<Icon />
								</div>
							) : null}
							{title ? <div className="small">{title}</div> : null}
						</div>
					</NavLink>
				))}
			</nav>
		</Navbar>
	) : null;
};

export default BottomBar;
