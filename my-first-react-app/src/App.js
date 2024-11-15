import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/sem4/AboutPage";
import HomePage from "./components/sem4/HomePage";
import NotFound from "./components/sem4/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} /> {/* Страница 404 */}
      </Routes>
    </>
  );
}
export default App;
