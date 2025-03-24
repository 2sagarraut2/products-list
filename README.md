We are authenticating the user using recaptcha

We are getting data from https://dummyjson.com/products api and showing it as cards.

- Project Setup:
  - Container Component:
    - ProductContainer: to host container for components

Components: Products: Showing all products SearchProducts: to search products Pagination: to move from one page to next (pending)

- AuthPage.js

  - no props

- Pagination.js

  - currentPage, // to check current page
  - gotoNextPage, // to goto next page
  - gotoPrevPage, // to goto previous page

- Products.js

  - searchValue, // to get search input from user
  - products, // to store products
  - searchEnabled, // to show search string in UI

- Searchproducts.js
  - searchValue, // to store user input
  - setSearchValue, // to update search input
  - searchProductsQuery, // to store value entered by user
  - getProducts, // API to get all prodcuts
  - setSearchEnabled, // to show search string
  - setCurrentPage, // to check current page
