import React from "react";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="navbar">
      <div>E-commerce </div>
      <div className="data_dis">
        <div className="navdata_wrap">
          <img src="/svgs/ShareIcon.svg" alt="Share Icon" />
          Share Logs
        </div>
      </div>
      <div className="cart_img">
        <div className="cart_img_wrap">
          <img src="/svgs/ShoppingIcon.svg" alt="Share Icon" />
          <span className="cart_item_counter">{cartItems.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

