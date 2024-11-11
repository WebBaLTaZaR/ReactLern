import { useState } from "react";

function TextInput() {
  const [input, setInput] = useState("");
  const changeInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <>
      <input type="text" value={input} onChange={changeInput}></input>
      <p>Вы ввели: {input}</p>
    </>
  );
}

export default TextInput;
