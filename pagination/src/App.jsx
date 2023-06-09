import { useEffect, useState } from "react";
import "./App.css";
import SingleProduct from "./components/SingleProduct";
import Paginate from "./components/Paginate";

function App() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
      );
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, [page]);

  const pageHandler = function (id) {
    setPage(id);
  };

  const productElements = products.map((product) => (
    <SingleProduct product={product} key={product.id} />
  ));

  return (
    <>
      <div className="products">{productElements}</div>
      <Paginate page={page} pageHandler={pageHandler} products={products} />
    </>
  );
}

export default App;
