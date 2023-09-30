import React, { useState } from "react";
import "./Style.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/actions";


const Listofproducts = ({ title }) => {
  const [iconState, setIconState] = useState({});

  const toggleIcon = (index) => {
    setIconState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };


  const [productsData, setproductsData] = useState([])

  fetch('https://bunchabackend.onrender.com/data').then((res) => {
    return res.json();
  }).then((res) => {
    setproductsData(res)
  }).catch((err) => {
    console.log(err)
  })



  const dispatch = useDispatch();

  const addToCartHandler = (products) => {
    dispatch(addToCart(products));
  };

  const removeFromCartHandler = (products) => {
    dispatch(removeFromCart({ productsId: products.id }));
  };

  return (

    <>
   
    <div className="product">
      <div className="product_title">
        <h1>{title}</h1>
        <img src="/svgs/arrow.svg" alt="Share Icon" />
      </div>
      <div className="products-cards-container">
        {productsData.map((products, index) => (
          <div className="products-card" key={index}>
            <div className="products-image-container">
              <img
                src={products.image}
                alt={`products ${index}`}
                className="products-image"
              />
              <div
                className="add-to-cart-icon"
                onClick={() => toggleIcon(index)}
              >
                {iconState[index] ? (
                  <img
                    src="/svgs/minusIcon.svg"
                    alt="Minus Icon"
                    onClick={() => removeFromCartHandler(products)}
                  />
                ) : (
                  <img
                    src="/svgs/plusicon.svg"
                    alt="Plus Icon"
                    onClick={() => addToCartHandler(products)}
                  />
                )}
              </div>
            </div>
            <h2>{products.price}</h2>
            <h3>{products.name}</h3>
             <p>{products.data1}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Listofproducts;



