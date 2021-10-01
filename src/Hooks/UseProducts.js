import { useEffect } from "react";
import { useState } from "react";

const UseProducts = () => {
  const [useProducts, setUseProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setUseProducts(data));
  }, []);
  return [useProducts];
};

export default UseProducts;
