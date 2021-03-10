import { RiCheckboxCircleLine as AboutIcon } from "react-icons/ri";

const about = {
	key: "about",
	title: "About",
	path: "/about",
	Icon: AboutIcon,
};

const About = () => {
	return (
		<div className="container-fluid">
			<h1 className="h3">About page</h1>
		</div>
	);
};

export default { ...about, Component: About };
