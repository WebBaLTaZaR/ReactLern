import "./App.css";
import store from './components/sem7/homeWork/redux/store';
import { Provider } from "react-redux";
import TasksList from "./components/sem7/homeWork/components/TasksList";
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Список задач</h1>
        <TasksList />
      </div>
    </Provider>
  );
}

export default App;
