import React from "react";

export const Categories = (props) => {
	const { id, onClickCategory } = props;

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
						onClick={() => onClickCategory(index)}
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
