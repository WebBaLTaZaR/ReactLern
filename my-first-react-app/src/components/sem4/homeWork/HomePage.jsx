import { Link } from "react-router-dom";

function HomePage() {
	return ( <>
	<Link
		to="/about">О нас</Link>
	<h1>Главная страница</h1>
	<Link to="/list">Список продуктов</Link>
	</> );
}

export default HomePage;