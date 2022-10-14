import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./index.module.scss";

const Pagination = ({setPage}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLable='...'
      nextLabel='>'
      previousLabel='<'
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
      onPageChange={(e) => setPage(e.selected + 1)}
    />
  );
};

export default Pagination;
