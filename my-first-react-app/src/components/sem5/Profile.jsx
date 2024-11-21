import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { ThemeContext } from "./contexts/ThemeContext";
function Profile() {
	const { user, setUser } = useContext(UserContext);
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [userList, setUserList] = useState([]);
	const changeList = (event)=>{
		setUser(event.target.value);
	}
	const newUser = ()=>{
		if (userList.trim() !== "") {
			setUserList([...userList, user]);
		}
		
	}
	const profileStyle = {
		backgroundColor: theme === "light" ? "#ffffff" : "#333333",
		color: theme === "light" ? "#000000" : "#ffffff",
	  };

	return ( <>
	<div style={profileStyle}>
	<button onClick={toggleTheme}>{theme}</button>
	<h2>Тема в данный момент установлена {theme}</h2>
	<p>Уважаемый {user}, если вас зовут подругому, то напишите ниже</p>
	<input value={user} type="text" placeholder="ваше имя" onChange={changeList}></input>
	</div>
	
	</> );
}

export default Profile;