import "./App.css";
import { Provider } from "react-redux";
import store from "./components/sem5/homeWork/redux/store";
import ThemeSwitcher from "./components/sem5/homeWork/ThemeSwitcher";
function App() {
  return (
    <Provider store={store}>
      <ThemeSwitcher />
    </Provider>
  );
}

export default App;
