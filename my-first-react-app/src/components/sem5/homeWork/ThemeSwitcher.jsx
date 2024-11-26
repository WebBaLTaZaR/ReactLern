import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./redux/actions/themeActions";

function ThemeSwitcher() {
  const theme = useSelector((state) => state.theme); 
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const themeStyles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={themeStyles}>
      <h1>{theme === "light" ? "Светлая тема" : "Тёмная тема"}</h1>
      <button onClick={handleToggle}>
        Переключить на {theme === "light" ? "тёмную" : "светлую"} тему
      </button>
    </div>
  );
}

export default ThemeSwitcher;
