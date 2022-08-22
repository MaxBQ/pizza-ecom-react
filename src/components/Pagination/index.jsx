import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export const Pagination = (props) => {
	const { onChangePage } = props;
	return (
		<>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='>'
				previousLabel='<'
				onPageChange={(e) => onChangePage(e.selected + 1)}
				pageRangeDisplayed={4}
				pageCount={3}
				renderOnZeroPageCount={null}
			/>
		</>
	);
};
