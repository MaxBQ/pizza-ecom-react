import { configureStore } from "@reduxjs/toolkit";
import searchCategoryReducer from "./searchCategorySlice";

export const store = configureStore({
	reducer: {
		filterCategory: searchCategoryReducer,
	},
});
