import { useEffect, useState } from "react";

// TO show all products
const Products = ({
  searchValue, // to get search input from user
  products, // to store products
  searchEnabled, // to show search string in UI
}) => {
  return (
    <div>
      <h6>
        {searchEnabled && <span>Showing results for: {searchValue}</span>}
      </h6>
      <section className="products">
        {products.map((p) => {
          return (
            <ul key={p.id} className="product">
              <span className="product-image">
                <img
                  width={100}
                  src={p.images[0]}
                  alt="prodcut-image"
                  // lazy loading used for images
                  loading="lazy"
                />
              </span>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
            </ul>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
