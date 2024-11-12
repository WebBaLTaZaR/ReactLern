import "./App.css";
import Counter from "./components/sem3/Counter";
import Greeting from "./components/sem3/Greeting";
import MessagesList from "./components/sem3/MessagesList";

function App() {
  return (
    <>
      <Greeting name={"Антон"} />
      <Counter />
      <MessagesList />
    </>
  );
}
export default App;
