
import React from "react";
import Listofproducts from "./AllProducts/ProductsList";

const Products = () => {
  return (
    <div>
      <div id="product">
        <Listofproducts title="product" />
      </div>
      <div id="PreparedFoods">
        <Listofproducts title="Prepared Foods" />
      </div>
      <div id="CannedFoods">
        <Listofproducts title="Canned Foods" />
      </div>
      <div id="Bakery">
        <Listofproducts title="Bakery" />
      </div>
      <div id="Dairy">
        <Listofproducts title="Dairy" />
      </div>
      <div id="FrozenMeat">
        <Listofproducts title="Frozen Meat" />
      </div>
      
      <div id="MeatAndSeafood">
        <Listofproducts title="Meat and Seafood" />
      </div>
      <div id="DairyAndEggs">
        <Listofproducts title="Dairy & Eggs" />
      </div>
    </div>
  );
};

export default Products;
