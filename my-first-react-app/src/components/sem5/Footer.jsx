import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
function Footer() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const year = new Date().getFullYear();
	const footerStyle = {
		backgroundColor: theme === "light" ? "#ffffff" : "#333333",
		color: theme === "light" ? "#000000" : "#ffffff",
	  };
	return ( <>
	<footer style={footerStyle}><h3>В данный момент тема {theme}</h3>
	<p>Сейчас год: {year}</p>
	<button onClick={toggleTheme}>{theme}</button></footer>
	
	</> );
}

export default Footer;