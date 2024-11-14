import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Card, IconButton } from "@mui/material";
import { useState } from "react";
function TodoListUI() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const handlerChange = (event) => {
    setInput(event.target.value);
  };
  const handlerClick = (event) => {
    try {
      event.stopPropagation();
      if (input.trim() === "") {
        throw new Error("Пустое поле ввода");
      }
      setList([...list, { id: list.length + 1, text: input }]);
      setInput("");
    } catch (error) {
      alert(error.message);
    }
  };
  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <div>
      <TextField
        value={input}
        onChange={handlerChange}
        fullWidth
        label="Добавить заметку"
      ></TextField>
      <Button
        onClick={handlerClick}
        sx={{ marginTop: 2, marginLeft: 2 }}
        variant="contained"
        color="primary"
      >
        Добавить задачу
      </Button>

      <Card>
        {list.map((item) => (
          <div>
            <p key={item.id}>{item.text}</p>
            <IconButton
              color="error"
              onClick={() => handleDelete(item.id)}
              aria-label="удалить"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default TodoListUI;
