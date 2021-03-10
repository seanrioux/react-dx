import home from "./pages/home";
import about from "./pages/about";
import logo from "./logo.svg";

const config = {
	brand: {
		name: "Example",
		logo: logo,
	},
	pages: [home, about],
	navigation: {
		main: [home, about],
		tabs: [home, about],
		account: [],
	},
};

export default config;
