import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import config from "../config";

const useGlobals = () => {
	// Set global state
	const [title, setTitle] = useState();
	const [message, setMessage] = useState();

	let location = useLocation();

	// On location change
	useEffect(() => {
		// Find page
		const page = config.pages.find((page) => page.path === location.pathname);
		// Set State
		setTitle(page.title);
		setMessage(page.message);
		return () => {
			// Cleanup
			setTitle("Unknown");
			setMessage();
		};
	}, [location]);

	// Global actions
	const actions = (action, type, object) => {
		let newObject;
		let status;
		switch ((action, type)) {
			case ("change", "message"):
				setMessage(object);
				status = "Message changed";
				break;
		}
		return [newObject, status];
	};

	// Return globals
	return [actions, title, message];
};

export default useGlobals;
