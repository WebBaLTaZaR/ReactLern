import { useState } from "react";
import { editProduct } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

function EditProduct({ product, onCancel }) {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const dispatch = useDispatch();
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(
      editProduct(product.id, name, description, parseFloat(price), available)
    );
    onCancel();
  };
  return (
    <div>
      <h3>Редактировать продукт</h3>
      <form onSubmit={handleSave}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Название"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Цена"
        />
        <select
          value={available.toString()}
          onChange={(e) => setAvailable(e.target.value === "true")}
        >
          <option value={true}>Доступно</option>
          <option value={false}>Недоступно</option>
        </select>
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>
          Отмена
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
