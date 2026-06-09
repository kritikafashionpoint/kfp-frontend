import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    category_loading: false,
};

const categorySlice = createSlice({
    name: "categories",

    initialState,

    reducers: {

        setCategories: (state, action) => {
            state.categories = action.payload;
        },

        setCategoryLoading: (state, action) => {
            state.category_loading = action.payload;
        },

        // addCategory: (state, action) => {
        //     state.categories.unshift(action.payload);
        // },

        // deleteCategory: (state, action) => {
        //     state.categories =
        //         state.categories.filter(
        //             (item) =>
        //                 item.category_id !== action.payload
        //         );
        // },

        // updateCategory: (state, action) => {

        //     state.categories =
        //         state.categories.map((item) =>

        //             item.category_id ===
        //                 action.payload.category_id

        //                 ? action.payload

        //                 : item
        //         );
        // },
    },
});

export const {

    setCategories,

    setCategoryLoading,

    addCategory,

    deleteCategory,

    updateCategory,

} = categorySlice.actions;

export default categorySlice.reducer;