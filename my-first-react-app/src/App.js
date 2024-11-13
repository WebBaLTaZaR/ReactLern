import "./App.css";
import TodoList from "./components/sem2/TodoList";
import Counter from "./components/sem3/Counter";
import Greeting from "./components/sem3/Greeting";
import MessagesList from "./components/sem3/MessagesList";
import TextDisplayForm from "./components/sem3/TextDisplayForm";

function App() {
  return (
    <>
      <Greeting name={"Антон"} />
      <Counter />
      <MessagesList />
      <TextDisplayForm />
    </>
  );
}
export default App;
