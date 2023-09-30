
import React, { useRef } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const scrollbarRef = useRef(null);

  const handleScrollbar = (products) => {
    const productsElement = document.getElementById(products);
    if (productsElement && scrollbarRef.current) {
      const offset = 80;
      const elementPosition = productsElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      
      scrollbarRef.current.scrollTop = offsetPosition;
    }
  };

  return (
    <div className="sidebar"  >
      <div className="scrollbar" ref={scrollbarRef}>
        <div
          onClick={() => handleScrollbar("product")}
          className="products"
        >
          product
        </div>
        <div
          onClick={() => handleScrollbar("PreparedFoods")}
          className="products"
        >
          Prepared Foods
        </div>
        <div
          onClick={() => handleScrollbar("CannedFoods")}
          className="products"
        >
          Canned Foods
        </div>
        <div
          onClick={() => handleScrollbar("Bakery")}
          className="products"
        >
          Bakery
        </div>
        <div onClick={() => handleScrollbar("Dairy")} className="products">
          Dairy
        </div>
        <div
          onClick={() => handleScrollbar("FrozenMeat")}
          className="products"
        >
          Frozen Meat
        </div>
        <div
          onClick={() => handleScrollbar("MeatAndSeafood")}
          className="products"
        >
          Meat and Seafood
        </div>
        <div
          onClick={() => handleScrollbar("DairyAndEggs")}
          className="products"
        >
          Dairy & Eggs
        </div>
        <div
          onClick={() => handleScrollbar("PreparedFoods2")}
          className="products"
        >
          Prepared Foods
        </div>
        <div
          onClick={() => handleScrollbar("CannedFoodsAndSoups")}
          className="products"
        >
          Canned Foods and Soups
        </div>
        <div
          onClick={() => handleScrollbar("product")}
          className="products"
        >
          product
        </div>
        <div
          onClick={() => handleScrollbar("PreparedFoods")}
          className="products"
        >
          Prepared Foods
        </div>
        <div
          onClick={() => handleScrollbar("CannedFoods")}
          className="products"
        >
          Canned Foods
        </div>
        <div
          onClick={() => handleScrollbar("Bakery")}
          className="products"
        >
          Bakery
        </div>
        <div onClick={() => handleScrollbar("Dairy")} className="products">
          Dairy
        </div>
        <div
          onClick={() => handleScrollbar("FrozenMeat")}
          className="products"
        >
          Frozen Meat
        </div>
        <div
          onClick={() => handleScrollbar("MeatAndSeafood")}
          className="products"
        >
          Meat and Seafood
        </div>
        <div
          onClick={() => handleScrollbar("DairyAndEggs")}
          className="products"
        >
          Dairy & Eggs
        </div>
        <div
          onClick={() => handleScrollbar("PreparedFoods2")}
          className="products"
        >
          Prepared Foods
        </div>
        <div
          onClick={() => handleScrollbar("CannedFoodsAndSoups")}
          className="products"
        >
          Canned Foods and Soups
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
