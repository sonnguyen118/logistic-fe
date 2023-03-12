import React from "react";
import { Link, useLocation } from "react-router-dom";

const Pagination = ({ originUrl, param, max, maxpage }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get(param)) || 1;
  const totalPages = Math.ceil(max / Number(maxpage));
  const showPages = 4;
  const startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
  const endPage = Math.min(totalPages, startPage + showPages - 1);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const renderPages = () => {
    const pagesToRender = [];
    if (startPage > 1) {
      pagesToRender.push(
        <li className="page-item" key="first">
          <Link className="page-link" to={`?${originUrl}=1`}>
            Trang Đầu
          </Link>
        </li>
      );
    }

    pages.forEach((page) => {
      pagesToRender.push(
        <li
          className={`page-item${currentPage === page ? " active" : ""}`}
          key={page}
        >
          <Link className="page-link" to={`?${originUrl}=${page}`}>
            {page}
          </Link>
        </li>
      );
    });

    if (endPage < totalPages) {
      pagesToRender.push(
        <li className="page-item disabled" key="last-dots">
          <span className="page-link">...</span>
        </li>
      );

      pagesToRender.push(
        <li className="page-item" key="last">
          <Link className="page-link" to={`?${originUrl}=${totalPages}`}>
            {totalPages}
          </Link>
        </li>
      );
    }

    return pagesToRender;
  };

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
          <Link className="page-link" to={`?${originUrl}=${currentPage - 1}`}>
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </Link>
        </li>
        {renderPages()}
        <li
          className={`page-item${
            currentPage === totalPages ? " disabled" : ""
          }`}
        >
          <Link className="page-link" to={`?${originUrl}=${currentPage + 1}`}>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
