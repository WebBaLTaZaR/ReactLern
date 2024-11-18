import { Link } from "react-router-dom";

function ListPage({list}) {
	return ( <>
	<h2>Страница с Продуктами</h2>
	{list.map((fruit)=>(
		<div key={fruit.id}>
			<Link to={`/detail/${fruit.id}`}  >{fruit.name}</Link>
		</div>
	))}
	</> );
}

export default ListPage;