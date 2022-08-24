import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categoryId: 0,
};

export const searchCategorySlice = createSlice({
	name: "filterCategory",
	initialState,
	reducers: {
		filterCategories: (state, action) => {
			state.categoryId = action.payload;
		},
	},
});

export const { filterCategories } = searchCategorySlice.actions;

export default searchCategorySlice.reducer;
