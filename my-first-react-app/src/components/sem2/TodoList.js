import { useState } from "react";

function TodoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const changeKeep = (event) => {
    setInput(event.target.value);
  };
  const addKeep = () => {
    try {
      if (input.trim() !== "") {
        setList([...list, input]);
        setInput("");
      } else {
        throw new Error("Пустое поле ввода");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <input
        type="text"
        onChange={changeKeep}
        placeholder="введите заметку"
        value={input}
      ></input>
      <button className="send" onClick={addKeep}>
        добавить заметку
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
