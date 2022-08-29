import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slice/filterSlice";

export const Pagination = (props) => {
	const { currentPage } = useSelector((state) => state.filter);
	const dispatch = useDispatch();
	return (
		<>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='>'
				previousLabel='<'
				onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
				pageRangeDisplayed={4}
				forcePage={currentPage - 1}
				pageCount={3}
				renderOnZeroPageCount={null}
			/>
		</>
	);
};
