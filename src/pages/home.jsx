import { RiCheckboxCircleLine as HomeIcon } from "react-icons/ri";

const home = {
	key: "home",
	title: "Home",
	message: "Welcome home",
	path: "/",
	Icon: HomeIcon,
};

const Home = () => {
	return (
		<div className="container-fluid">
			<h1 className="h3">Home page</h1>
		</div>
	);
};

export default { ...home, Component: Home };
