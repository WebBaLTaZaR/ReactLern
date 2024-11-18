import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/sem4/homeWork/AboutPage";
import HomePage from "./components/sem4/homeWork/HomePage";
import NotFound from "./components/sem4/NotFound";
import ListPage from "./components/sem4/ListPage";
import DetailPage from "./components/sem4/DetailPage";

function App() {
  const list = [
    { id: 1, name: "apple", description: "Fresh and juicy apple" },
    { id: 2, name: "banana", description: "Sweet and ripe banana" },
    { id: 3, name: "orange", description: "Citrus and vitamin-rich orange" },
    { id: 4, name: "lemon", description: "Sour and tangy lemon" },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/list" element={<ListPage list={list} />} />
        <Route path="/detail/:id" element={<DetailPage list={list} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
