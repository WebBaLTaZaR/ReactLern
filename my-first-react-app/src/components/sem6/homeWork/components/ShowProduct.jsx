import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../redux/actions/productActions";
import { useState } from "react";
import EditProduct from "./EditProduct";
function ShowProduct() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [editingProduct, setEditingProduct] = useState(null);
  const handleEdit = (product) => {
    setEditingProduct(product);
  };
  const handleCancelEdit = () => {
    setEditingProduct(null);
  };
  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>Имя товара : {product.name}</h3>
            <p>{product.description}</p>
            <p>цена: {product.price}</p>
            <p>Есть ли на складе? {product.available ? "Да" : "Нет"}</p>
            <button onClick={() => handleEdit(product)}>Редактировать</button>
            <button onClick={() => handleRemove(product.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      {editingProduct && (
        <EditProduct product={editingProduct} onCancel={handleCancelEdit} />
      )}
    </>
  );
}

export default ShowProduct;
