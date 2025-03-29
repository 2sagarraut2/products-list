import { useEffect, useState } from "react";

// TO show all products
const Products = ({
  searchValue, // to get search input from user
  products, // to store products
  searchEnabled, // to show search string in UI
}) => {
  console.log(products);
  return (
    <div>
      <h6>
        {searchEnabled && <span>Showing results for: {searchValue}</span>}
      </h6>
      <section className="products-container">
        {products.map((p) => {
          return (
            <div key={p.id} className="product">
              <img src={p.images[0]} alt="product" className="product-image" />
              <div className="product-title">{p.title}</div>
              <div>{p.description}</div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
