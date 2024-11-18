import { Link } from "react-router-dom";

function AboutPage() {
	return ( <>
	<Link to="/">Главная</Link>
	<h1>О нас</h1>
	<Link to="/list">Список продуктов</Link>
	</> );
}

export default AboutPage;