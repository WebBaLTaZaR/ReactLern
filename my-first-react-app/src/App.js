import "./App.css";
import Counter from "./components/sem2/Task1";
import TextInput from "./components/sem2/TextInput";
import Timer from "./components/sem2/Timer";
import TodoList from "./components/sem2/TodoList";
import CommentsList from "./components/sem2/homeWork/CommentsList";

function App() {
  return (
    <>
      <Counter />
      <TextInput />
      <TodoList />
      <Timer />
      <CommentsList/>
    </>
  );
}
export default App;
