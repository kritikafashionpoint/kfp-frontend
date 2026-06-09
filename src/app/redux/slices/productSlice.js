import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    products_loading: false,
};

const productSlice = createSlice({
    name: "products",

    initialState,

    reducers: {

        setProducts: (state, action) => {
            state.products = action.payload;
        },

        setProductLoading: (state, action) => {
            state.products_loading = action.payload;
        },

    },
});

export const {

    setProducts,

    setProductLoading,

} = productSlice.actions;

export default productSlice.reducer;