import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product/Product";
import CardDetail from "./../CardDetail/CardDetail";
import OrderReview from "./OrderReview";

const Shop = () => {
  const [cartdetail, setCartDetail] = useState([]);
  const addToCart = (e) => {
    const newcart = [...cartdetail, e];
    setCartDetail(newcart);
    let exist = localStorage.getItem("cart");
    console.log(exist);
    const cart = {};
    if (exist === null) {
      let set = localStorage.setItem("cart", JSON.stringify(cartdetail));
    }
  };
  console.log(cartdetail);
  let total = 0;
  for (const cart of cartdetail) {
    total = parseFloat(total) + parseFloat(cart.price);
  }
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col lg="10">
            <Row>
              {products.map((product, index) => (
                <Col lg="4">
                  <Product
                    pro={product}
                    key={index}
                    addToCart={addToCart}
                  ></Product>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={"2"}>
            <h5>Toatl Order: {cartdetail.length} </h5>
            {cartdetail.map((cart) => (
              <CardDetail cart={cart} key={cart.key}></CardDetail>
            ))}
            <h5>Grand total:{total.toFixed(2)}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
