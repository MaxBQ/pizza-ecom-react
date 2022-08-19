import React from "react";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";

export const Home = () => {
	const [itemsPizza, setItemsPizza] = React.useState([]);
	const [isLodging, setIsLodging] = React.useState(true);
	const [isCategory, setIsCategory] = React.useState(0);
	const [isSort, setIsSort] = React.useState({
		name: "популярности",
		sortProperty: "rating",
	});

	React.useEffect(() => {
		setIsLodging(true);

		window.scrollTo(0, 0);

		const controller = new AbortController();
		const signal = controller.signal;

		const filter = `${isCategory ? `category=${isCategory}` : ""}`;
		const sortBy = `${
			isSort.sortProperty.replace("-", "")
				? `&sortBy=${isSort.sortProperty}`
				: ""
		}`;
		const order = `${
			isSort.sortProperty.includes("-") ? "&order=desc" : "&order=asc"
		}`;

		fetch(
			`https://62fe4b6ba85c52ee48347486.mockapi.io/items?${filter}${sortBy}${order}`,
			{
				signal,
			}
		)
			.then((res) => res.json())
			.then((pizzas) => {
				setItemsPizza(pizzas);
				setIsLodging(false);
			});
		return () => {
			controller.abort();
		};
	}, [isCategory, isSort]);
	return (
		<>
			<div className='content__top'>
				<Categories
					id={isCategory}
					onClickCategory={(id) => setIsCategory(id)}
				/>
				<Sort
					sortName={isSort.name}
					onClickSort={(objSort) => setIsSort(objSort)}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLodging
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: itemsPizza.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
			</div>
		</>
	);
};
