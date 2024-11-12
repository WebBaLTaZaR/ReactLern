import Button from "@mui/material/Button";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const countPlus = () => setCount(count + 1);
  const countMinus = () => setCount(count - 1);
  return (
    <>
      <Button onClick={countPlus} variant="contained" color="primary">
        +1
      </Button>
      <Button onClick={countMinus} variant="contained" color="primary">
        -1
      </Button>
      <h1>{count}</h1>
    </>
  );
}

export default Counter;
