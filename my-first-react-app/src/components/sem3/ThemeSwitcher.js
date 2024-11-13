import { useState } from "react";
import Content from "./Content";
import styles from "./ThemeSwitcher.module.css";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <button
        className={`${styles.button} ${styles[theme]}`}
        onClick={toggleTheme}
      >
        Переключить тему {theme === "light" ? "Темная" : "Светлая"}
      </button>
      <Content theme={theme} />
    </>
  );
}

export default ThemeSwitcher;
