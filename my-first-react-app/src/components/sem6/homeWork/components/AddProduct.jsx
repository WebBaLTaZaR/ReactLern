import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/productActions";
function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      dispatch(addProduct(name, description, parseFloat(price), available));
      setName("");
      setDescription("");
      setPrice(0);
      setAvailable(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Добавить новый товар:</h2>
        <input
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Введите описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Введите цену"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <select
          value={available.toString()}
          onChange={(e) => setAvailable(e.target.value === "true")}
        >
          <option value="true">Доступно</option>
          <option value="false">Недоступно</option>
        </select>
        <button type="submit">отправить</button>
      </form>
    </>
  );
}

export default AddProduct;
