
import { post_api } from "@/app/api_helper/api_helper";
import {
    setCartData,
    setCartDataLoading,
    setTotalAmountOfCart,
} from "../slices/cartSlice";

export const fetchCartData = (token) => {
    return async (dispatch) => {

        try {
            dispatch(setCartDataLoading(true));

            const response = await post_api({
                body: {},
                params: null,
                path: "user/view-cart",
                token,
            });

            if (response?.data?.success) {

                dispatch(
                    setCartData(
                        response.data.data.items || []
                    )
                );

                dispatch(
                    setTotalAmountOfCart(
                        response.data.data.total || 0
                    )
                );
            }

        } catch (error) {
            console.log("Cart Fetch Error", error);
        } finally {
            dispatch(setCartDataLoading(false));
        }
    };
};