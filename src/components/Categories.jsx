import React from "react";

export const Categories = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const categories = [
		"Все",
		"Мясные",
		"Вегетарианская",
		"Гриль",
		"Острые",
		"Закрытые",
	];

	const onClickCategories = (index) => () => {
		setActiveIndex(index);
	};

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, index) => (
					<li
						onClick={onClickCategories(index)}
						className={activeIndex === index ? "active" : ""}
						key={index}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};
