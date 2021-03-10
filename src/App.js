import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import config from "./config";

import "./styles/style.scss";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";

import useGlobals from "./hooks/useGlobals";

function App() {
	const [actions, title, message] = useGlobals();

	const store = {
		home: {
			title: "Home route",
		},
	};

	return (
		<>
			<header>
				<TopBar title={title} message={message} />
			</header>
			<main className="top-bar-offset">
				<Switch>
					{config.pages.map(({ Component, path, key }) => (
						<Route exact path={path} key={key}>
							<Component state={store[key]} />
						</Route>
					))}
				</Switch>
			</main>
			<footer>
				<BottomBar />
				<nav></nav>
			</footer>
		</>
	);
}

export default App;
