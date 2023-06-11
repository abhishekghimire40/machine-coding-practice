import { useEffect, useState } from "react";
import "./App.css";
import SingleProduct from "./components/SingleProduct";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 10}`
      );
      const data = await res.json();
      console.log(data);
      setProducts(data.products);
    }
    fetchProducts();
  }, [count]);

  function changePage(e) {
    setCount(() => {
      return count === 9 ? 9 : count + 1;
    });
  }

  const productElements = products.map((product) => (
    <SingleProduct product={product} id={product.id} />
  ));

  return (
    <>
      <div className="products">{productElements}</div>
      <div>
        <button className="paginate" onClick={changePage}>
          PageNo: {count}{" "}
        </button>
      </div>
    </>
  );
}

export default App;
