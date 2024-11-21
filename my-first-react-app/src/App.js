import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/sem5/Footer";
import Header from "./components/sem5/Header";
import Profile from "./components/sem5/Profile";
import { ThemeContext } from "./components/sem5/contexts/ThemeContext";
import { UserContext } from "./components/sem5/contexts/UserContext";

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState("BalTazaR");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Profile />
          <Footer />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
export default App;
