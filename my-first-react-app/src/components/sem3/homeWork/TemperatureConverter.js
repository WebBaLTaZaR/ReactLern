import TextField from "@mui/material/TextField";
import { useState } from "react";
function TemperatureConverter() {
  const [cel, setCel] = useState(0);
  const [far, setFar] = useState(32);
  const celInFar = (event) => {
    const newCel = parseFloat(event.target.value);
    setCel(newCel);
    setFar((newCel * 9) / 5 + 32);
  };
  const farInCel = (event) => {
    const newFar = parseFloat(event.target.value);
    setFar(newFar);
    setCel(((newFar - 32) * 5) / 9);
  };
  return (
    <>
      <TextField
        sx={{ marginTop: 2, padding: 2 }}
        type="number"
        value={far}
        onChange={farInCel}
        label="Фарингейта"
      ></TextField>
      <TextField
        sx={{ marginTop: 2, padding: 2 }}
        type="number"
        value={cel}
        onChange={celInFar}
        label="Цельсия"
      ></TextField>
    </>
  );
}

export default TemperatureConverter;
