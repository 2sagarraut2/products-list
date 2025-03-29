import { useEffect, useState } from "react";
import Products from "../components/Products";
import SearchProduct from "../components/SearchProduct";
import Pagination from "../components/Paginations";
import Loader from "../components/Loader";

const ProductContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchEnabled, setSearchEnabled] = useState(false);

  // Fetch products when currentPage changes
  useEffect(() => {
    getProducts();
  }, [currentPage]);

  // API to get all products
  const getProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${(currentPage - 1) * 10}`
    );
    const json = await response.json();
    setProducts(json.products);

    // Total items / 10 per page
    setPageCount(Math.ceil(json.total / 10));
  };

  // API to search for given query
  const searchProductsQuery = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchValue}`
    );
    const json = await response.json();
    setProducts(json.products);
    setPageCount(Math.ceil(json.total / 10)); // Update pagination for search results
  };

  const gotoNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const gotoPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <SearchProduct
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchProductsQuery={searchProductsQuery}
        getProducts={getProducts}
        setSearchEnabled={setSearchEnabled}
        setCurrentPage={setCurrentPage}
      />
      {products.length > 0 ? (
        <div>
          <Products
            searchValue={searchValue}
            products={products}
            searchEnabled={searchEnabled}
          />
          <Pagination
            currentPage={currentPage}
            gotoNextPage={gotoNextPage}
            gotoPrevPage={gotoPrevPage}
          />{" "}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductContainer;
