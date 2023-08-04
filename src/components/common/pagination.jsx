import React from "react";
import _ from "lodash"; // underscore library
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  // console.log(currentPage);

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null; // if there's only 1 page, don't show pagination
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
