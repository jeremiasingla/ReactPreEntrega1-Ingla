import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container__title">
      <h1 className="header__title">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
