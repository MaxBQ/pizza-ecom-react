import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categoryId: 0,
	sort: { name: "популярности(ASC)", sortProperty: "rating" },
	currentPage: 1,
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterCategories: (state, action) => {
			state.categoryId = action.payload;
		},
		setSort: (state, action) => {
			state.sort = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setFilters: (state, action) => {
			state.categoryId = Number(action.payload.categoryId);
			state.sort = action.payload.sort;
			state.currentPage = Number(action.payload.currentPage);
		},
	},
});

export const { filterCategories, setSort, setCurrentPage, setFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
