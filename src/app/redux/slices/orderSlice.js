import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    selectedOrder: null,
    order_loading: false,
    error: null,
};

const orderSlice = createSlice({
    name: "orders",
    initialState,

    reducers: {
        setOrderLoading: (state, action) => {
            state.order_loading = action.payload;
        },

        setOrders: (state, action) => {
            state.orders = action.payload;
        },

        addOrder: (state, action) => {
            state.orders.unshift(action.payload);
        },

        updateOrderStatus: (state, action) => {
            const { orderId, status } = action.payload;

            const order = state.orders.find(
                (item) => item.order_id === orderId
            );

            if (order) {
                order.order_status = status;
            }
        },

        updatePaymentStatus: (state, action) => {
            const { orderId, status } = action.payload;

            const order = state.orders.find(
                (item) => item.order_id === orderId
            );

            if (order) {
                order.payment_status = status;
            }
        },

        setSelectedOrder: (state, action) => {
            state.selectedOrder = action.payload;
        },

        setOrderError: (state, action) => {
            state.error = action.payload;
        },

        clearOrderState: (state) => {
            state.orders = [];
            state.selectedOrder = null;
            state.error = null;
            state.order_loading = false;
        }
    }
});

export const {
    setOrderLoading,
    setOrders,
    addOrder,
    updateOrderStatus,
    updatePaymentStatus,
    setSelectedOrder,
    setOrderError,
    clearOrderState
} = orderSlice.actions;

export default orderSlice.reducer;