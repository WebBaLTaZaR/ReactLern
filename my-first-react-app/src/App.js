import "./App.css";
import Box from "./components/sem4/Box";
import List from "./components/sem4/list";

function App() {
  return (
    <>
      <Box>
        <h1>этот тег находится в Боксе</h1>
        <button>кнопка</button>
      </Box>
      <List render={(item) => <span>{item}</span>} />
    </>
  );
}
export default App;
