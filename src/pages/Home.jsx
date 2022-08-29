import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { SearchContext } from "../App";
import { Categories } from "../components/Categories";
import { Pagination } from "../components/Pagination";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";

export const Home = (props) => {
	const { categoryId, sort, currentPage } = useSelector(
		(state) => state.filter
	);
	const { searchValue } = React.useContext(SearchContext);
	const [itemsPizza, setItemsPizza] = React.useState([]);
	const [isLodging, setIsLodging] = React.useState(true);

	React.useEffect(() => {
		setIsLodging(true);

		window.scrollTo(0, 0);

		const controller = new AbortController();
		const signal = controller.signal;

		const filter = `${categoryId ? `&category=${categoryId}` : ""}`;
		const sortBy = `${
			sort.sortProperty.replace("-", "") ? `&sortBy=${sort.sortProperty}` : ""
		}`;
		const order = `${
			sort.sortProperty.includes("-") ? "&order=desc" : "&order=asc"
		}`;
		const search = `${searchValue ? `&search=${searchValue}` : ""}`;

		axios
			.get(
				`https://62fe4b6ba85c52ee48347486.mockapi.io/items?page=${currentPage}&limit=4${filter}${sortBy}${order}${search}`,
				{
					signal,
				}
			)
			.then((res) => res.data)
			.then((pizzas) => {
				setItemsPizza(pizzas);
				setIsLodging(false);
			});
		return () => {
			controller.abort();
		};
	}, [categoryId, sort, searchValue, currentPage]);

	const skeleton = [...new Array(6)].map((_, index) => (
		<Skeleton key={index} />
	));
	const pizzas = itemsPizza.map((pizza) => (
		<PizzaBlock key={pizza.id} {...pizza} />
	));

	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>{isLodging ? skeleton : pizzas}</div>
			<Pagination />
		</>
	);
};
