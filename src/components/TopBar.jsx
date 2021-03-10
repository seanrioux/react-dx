// Libraries
import React, { useContext, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

// UI
import { Navbar, Dropdown, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { RiUser3Line, RiMore2Fill, RiArrowLeftSLine } from "react-icons/ri";

// Data
import config from "../config";

const TopBar = ({ title, message }) => {
	// Hooks
	const user = null;
	let history = useHistory();

	// Media queries
	const desktop = useMediaQuery({
		query: "(min-width: 1025px)",
	});
	const mobile = useMediaQuery({
		query: "(max-width: 1024px)",
	});

	const logoutUser = () => {
		return null;
	};

	// State
	const [accountDropdown, setAccountDropdown] = useState(false);

	// Template
	const brand = config.brand;
	const main = config.navigation.main;
	const account = config.navigation.account;

	return (
		<Navbar bg="white" variant="light" fixed="top" className="shadow">
			<div className="container-fluid justify-content-between">
				{
					// Back
					mobile ? (
						<Button onClick={() => history.goBack()} variant="white">
							<span className="icon-span">
								<RiArrowLeftSLine />
							</span>
						</Button>
					) : null
				}
				{
					// Brand
					desktop ? (
						<Link
							id="brand"
							className="navbar-brand d-flex align-items-center"
							to="/"
						>
							{brand.logo ? (
								<img
									className="brand-logo img-fluid mr-3"
									alt={`logo: ${brand.name}`}
									src={brand.logo}
								/>
							) : null}
							{brand.name ? <h1 className="h4 mb-0">{brand.name}</h1> : null}
						</Link>
					) : null
				}
				{
					// Title
					mobile ? (
						<div className={`row align-items-center text-center`}>
							<div className="col">
								{title ? <h1 className="h6 mb-0">{title}</h1> : null}
								{message ? (
									<div className="small text-black-50">{message}</div>
								) : null}
							</div>
						</div>
					) : null
				}
				{
					// Main
					desktop ? (
						<nav className="navbar-nav d-flex">
							{main.map(({ path, title }, index) => (
								<NavLink key={index} className="nav-link" to={path} exact>
									<span>{title}</span>
								</NavLink>
							))}
						</nav>
					) : null
				}

				{
					// Account
					user ? (
						<div className="account">
							<Dropdown
								show={accountDropdown}
								onToggle={() => setAccountDropdown(!accountDropdown)}
							>
								<Dropdown.Toggle
									id="account-nav-toggle"
									className="rounded-circle"
									variant="primary"
								>
									<img
										className="img-fluid rounded-circle"
										alt=""
										src={user.photo}
									/>
									<span className="icon-span">
										<RiUser3Line />
									</span>
								</Dropdown.Toggle>
								) : (
								<Dropdown.Toggle id="account-nav-toggle" variant="white">
									<span className="icon-span">
										<RiMore2Fill />
									</span>
								</Dropdown.Toggle>
								<Dropdown.Menu className="shadow-sm">
									{account
										? account.map((link, index) => (
												<Link
													key={index}
													onClick={() => setAccountDropdown(false)}
													className="dropdown-item"
													to={link.path}
												>
													{link.name}
												</Link>
										  ))
										: null}
									<Dropdown.Divider />
									<Dropdown.Item href="/" onClick={logoutUser}>
										Log out
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					) : (
						<Link className="btn btn-primary shadow-sm" to="/login">
							Log in
						</Link>
					)
				}
			</div>
		</Navbar>
	);
};

export default TopBar;
