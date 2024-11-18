import { useParams } from "react-router-dom";

function DetailPage({list}) {
	const {id} = useParams();
	const product = list.find((item) => item.id === Number(id));
  if (!product) {
    return <h2>Продукт не найден</h2>;
  }
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </>
  );
}

export default DetailPage;