import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";


function Header() {
	const { user } = useContext(UserContext);

	return ( <>
	<h1>Здравствуй {user}</h1>
	</> );
}

export default Header;