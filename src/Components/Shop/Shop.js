import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardDetail from "./../CardDetail/CardDetail";
import Product from "./Product/Product";

const Shop = () => {
  const [cartdetail, setCartDetail] = useState([]);
  const [singleCart, setSingleCart] = useState({});
  const addToCart = (e) => {
    const newcart = [...cartdetail, e];
    setSingleCart(e);
    setCartDetail(newcart);
  };
  useEffect(() => {
    let exist = localStorage.getItem("cart");
    if (exist !== null) {
      const carts = JSON.parse(exist);
      setCartDetail(carts);
    }
  }, []);
  useEffect(() => {
    addToDb({ cartdetail, singleCart });
  }, [cartdetail]);

  const addToDb = ({ cartdetail, singleCart }) => {
    if (cartdetail.length === 0) {
      console.log("hello");
    } else {
      for (const cart of cartdetail) {
        if (singleCart.key === cart.key) {
          cart.count = 1;
        }
      }
    }

    localStorage.setItem("cart", JSON.stringify(cartdetail));
  };
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
              {products.map((product) => (
                <Col key={product.key} lg="4">
                  <Product pro={product} addToCart={addToCart}></Product>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={"2"}>
            <h5>Toatl Order: {cartdetail.length} </h5>
            {cartdetail.map((cart, index) => (
              <CardDetail cart={cart} key={index}></CardDetail>
            ))}
            <h5>Grand total:{total.toFixed(2)}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
