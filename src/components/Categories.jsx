import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCategories } from "../redux/searchCategorySlice";

export const Categories = (props) => {
	// const { id, onClickCategory } = props;
	const id = useSelector((state) => state.filterCategory.categoryId);
	const dispatch = useDispatch();

	const categories = [
		"Все",
		"Мясные",
		"Вегетарианская",
		"Гриль",
		"Острые",
		"Закрытые",
	];

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, index) => (
					<li
						onClick={() => dispatch(filterCategories(index))}
						className={id === index ? "active" : ""}
						key={index}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};
