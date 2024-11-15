function List({ render }) {
  const data = ["HELLO", "WORLD"];
  const styles = [
    { color: "blue", fontWeight: "bold" },
    { color: "red", fontStyle: "italic" },
  ];
  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index} style={styles[index]}>
            {render(item)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
