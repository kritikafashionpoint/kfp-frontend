import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData: [],
    cart_data_loading: false,
    total_amount_of_cart: null

};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        setCartData: (state, action) => {
            state.cartData = action.payload || [];
        },

        setCartDataLoading: (state, action) => {
            state.cart_data_loading = action.payload;
        },

        setTotalAmountOfCart: (state, action) => {
            state.total_amount_of_cart = action.payload || null;
        },

        addToCart: (state, action) => {
            state.cartData.push(action.payload);
        },

        removeFromCart: (state, action) => {
            state.cartData = state.cartData.filter(
                (item) => item.product_id !== action.payload
            );

            state.total_amount_of_cart = state.cartData.reduce(
                (total, item) =>
                    total + Number(item.p_customer_price || 0),
                0
            );
        },

        clearCart: (state) => {
            state.cartData = [];
        },
    },
});

export const {
    setCartData,
    setTotalAmountOfCart,
    addToCart,
    removeFromCart,
    setCartDataLoading,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;