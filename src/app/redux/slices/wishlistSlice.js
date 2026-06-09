import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistData: [],
    wishlist_data_loading: false,
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,

    reducers: {
        setwishlistData: (state, action) => {
            state.wishlistData = action.payload || [];
        },

        setwishlistDataLoading: (state, action) => {
            state.wishlist_data_loading = action.payload;
        },

        addTowishlist: (state, action) => {
            state.wishlistData.push(action.payload);
        },

        removeFromwishlist: (state, action) => {
            state.wishlistData = state.wishlistData.filter(
                (item) => item.product_id !== action.payload
            )
        }
    },
});

export const {
    setwishlistData,
    setTotalAmountOfwishlist,
    addTowishlist,
    removeFromwishlist,
    setwishlistDataLoading,
    clearwishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;