import React from "react";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { PizzaBlock } from "./components/PizzaBlock";
import { Sort } from "./components/Sort";

import "./scss/app.scss";

function App() {
	const [itemsPizza, setItemsPizza] = React.useState([]);

	React.useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		fetch("https://62fe4b6ba85c52ee48347486.mockapi.io/items", { signal })
			.then((res) => res.json())
			.then((pizzas) => {
				setItemsPizza(pizzas);
			});
		return () => {
			controller.abort();
		};
	}, []);

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						{itemsPizza.map((pizza) => (
							<PizzaBlock key={pizza.id} {...pizza} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
