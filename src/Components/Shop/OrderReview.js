import React from "react";
import UseProducts from "../../Hooks/UseProducts";
import CardDetail from "../CardDetail/CardDetail";

const OrderReview = (props) => {
  console.log(props);
  const [products] = UseProducts();
  // const exist =localStorage.getItem('cart')
  // let parse = localStorage.getItem("cart");

  // const data = JSON.parse(parse);
  // console.log(data);
  // const remove = () => {
  //   localStorage.removeItem("cart");
  //   console.log("clicked");
  // };
  return (
    <div>
      <h3>total products {products.length}</h3>
      <CardDetail cart={products}></CardDetail>

      <button>Remove</button>
    </div>
  );
};

export default OrderReview;
