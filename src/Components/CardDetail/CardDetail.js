import React from "react";

const CardDetail = (props) => {
  // console.log(props);

  const { img, price } = props.cart;
  return (
    <div>
      <div className="d-flex align-items-center bg-info px-2 mb-2">
        <p className="me-1">Added Cart:</p>
        <img style={{ height: "50px", borderRadius: "50%" }} src={img} alt="" />
      </div>
    </div>
  );
};

export default CardDetail;
