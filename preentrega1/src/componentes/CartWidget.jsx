import React from "react";

const CartWidget = () => {
  return (
    <div>
      <i class="fas fa-shopping-cart "></i>
      <div className="shoppingNumberContainer">
        <span class="shoppingNumberCounter">0</span>
      </div>
    </div>
  );
};

export default CartWidget;
