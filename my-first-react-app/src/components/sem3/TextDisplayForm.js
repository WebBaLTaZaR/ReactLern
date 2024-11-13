import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useState } from "react";
function TextDisplayForm() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const takeInput = (event) => {
    setInput(event.target.value);
  };

  const showText = () => {
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
      <TextField
        value={input}
        onChange={takeInput}
        label="Введите текст"
        fullWidth
      ></TextField>
      <Button onClick={showText} variant="contained" color="primary">
        Отобразить текст
      </Button>
      <Card sx={{ marginTop: 2, padding: 2 }}>
        <Typography variant="h5">
          {list.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </Typography>
      </Card>
    </>
  );
}

export default TextDisplayForm;
