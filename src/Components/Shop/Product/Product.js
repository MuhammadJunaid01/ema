import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";

const Product = (props) => {
  //   console.log(props);
  const { img, name, price, star, shipping, stock, wholePrice } = props.pro;
  return (
    <div>
      <Card className="mt-3">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <small>name:{name.slice(0, 60)}</small>
          </Card.Title>
          <Card.Text>
            <h2> Price:{price}</h2>
            <p>Shipping Cost: {shipping}</p>
            <p>Stock: {stock}</p>
            <p>Ratting: {star}</p>
          </Card.Text>
          <Button onClick={() => props.addToCart(props.pro)} variant="primary">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
