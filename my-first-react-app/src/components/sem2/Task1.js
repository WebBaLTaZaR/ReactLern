import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const upCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={upCount}>+1</button>
      <p>{count}</p>
    </>
  );
}

export default Counter;
