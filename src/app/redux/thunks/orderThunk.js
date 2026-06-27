import { post_api } from "@/app/api_helper/api_helper";
import {
    setOrders,
    setOrderLoading,
    setOrderError,
} from "../slices/orderSlice";

export const fetchOrders = (token) => {
    return async (dispatch) => {
        try {
            dispatch(setOrderLoading(true));
            dispatch(setOrderError(null));

            const response = await post_api({
                body: {},
                params: null,
                path: "user/view-orders-by-user-id",
                token,
            });

            if (response?.data?.success) {
                const sortedOrders = (response.data.data || []).sort(
                    (a, b) =>
                        new Date(b.created_at) - new Date(a.created_at)
                );

                dispatch(setOrders(sortedOrders));
            } else {
                dispatch(
                    setOrderError(
                        response?.data?.message || "Failed to fetch orders"
                    )
                );

                dispatch(setOrders([]));
            }
        } catch (error) {
            console.log("Order Fetch Error:", error);

            dispatch(
                setOrderError(
                    error?.response?.data?.message ||
                    error?.message ||
                    "Something went wrong"
                )
            );

            dispatch(setOrders([]));
        } finally {
            dispatch(setOrderLoading(false));
        }
    };
};