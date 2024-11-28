import "./App.css";
import { Provider } from "react-redux";
import store from "./components/sem6/homeWork/redux/store";
import AddProduct from "./components/sem6/homeWork/components/AddProduct";
import ShowProduct from "./components/sem6/homeWork/components/ShowProduct";
function App() {
  return (
    <Provider store={store}>
      <div>
        <AddProduct />
        <ShowProduct />
      </div>
    </Provider>
  );
}

export default App;
