import "./App.css";
import Counter from "./components/sem3/Counter";
import Greeting from "./components/sem3/Greeting";
import MessagesList from "./components/sem3/MessagesList";
import TextDisplayForm from "./components/sem3/TextDisplayForm";
import ThemeSwitcher from "./components/sem3/ThemeSwitcher";

function App() {
  return (
    <>
      <Greeting name={"Антон"} />
      <Counter />
      <MessagesList />
      <TextDisplayForm />
      <ThemeSwitcher/>
    </>
  );
}
export default App;
