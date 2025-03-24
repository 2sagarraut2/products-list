// TO search for a product
const SearchProduct = ({
  searchValue, // to store user input
  setSearchValue, // to update search input
  searchProductsQuery, // to store value entered by user
  getProducts, // API to get all prodcuts
  setSearchEnabled, // to show search string
  setCurrentPage, // to check current page
}) => {
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmitClick = () => {
    searchProductsQuery();
    setSearchEnabled(true);
  };

  const handleClearClick = () => {
    getProducts();
    setSearchValue("");
    setSearchEnabled(false);
    setCurrentPage(1);
  };

  return (
    <section>
      <div className="search-container">
        <input
          placeholder="search..."
          className="search-box"
          onChange={(e) => handleSearchChange(e)}
          value={searchValue}
        />
        <button className="search-button" onClick={handleSubmitClick}>
          Search
        </button>
        <button className="search-button" onClick={handleClearClick}>
          Clear
        </button>
      </div>
    </section>
  );
};

export default SearchProduct;
