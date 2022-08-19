import React from "react";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";

export const Home = () => {
	const [itemsPizza, setItemsPizza] = React.useState([]);
	const [isLodging, setIsLodging] = React.useState(true);

	React.useEffect(() => {
		window.scrollTo(0, 0);
		const controller = new AbortController();
		const signal = controller.signal;
		fetch("https://62fe4b6ba85c52ee48347486.mockapi.io/items", { signal })
			.then((res) => res.json())
			.then((pizzas) => {
				setItemsPizza(pizzas);
				setIsLodging(false);
			});
		return () => {
			controller.abort();
		};
	}, []);
	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
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
