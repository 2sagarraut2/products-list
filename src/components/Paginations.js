// pagination component to handle pagination
const Pagination = ({
  currentPage, // to check current page
  gotoNextPage, // to goto next page
  gotoPrevPage, // to goto previous page
}) => {
  return (
    <div className="pagination-container">
      <button className="page-button-prev" onClick={gotoPrevPage}>
        Prev
      </button>
      <span>{currentPage}</span>
      <button className="page-button-next" onClick={gotoNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
