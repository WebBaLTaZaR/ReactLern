import { Link } from "react-router-dom";

function NotFound() {
	return ( <>
	<Link to="/">Главная</Link>
	<h1>Такой страницы нет (404)</h1>
	</> );
}

export default NotFound;