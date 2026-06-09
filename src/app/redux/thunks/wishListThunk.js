import { post_api } from "@/app/api_helper/api_helper";
import { setwishlistData, setwishlistDataLoading } from "../slices/wishlistSlice";

export const fetchwishlistData = (token) => {
    return async (dispatch) => {

        try {
            dispatch(setwishlistDataLoading(true));

            const response = await post_api({
                body: {},
                params: null,
                path: "user/view-wishlist",
                token,
            });

            if (response?.data?.success) {

                dispatch(
                    setwishlistData(
                        response.data.data || []
                    )
                );
            }

        } catch (error) {
            console.log("wishlist Fetch Error", error);
        } finally {
            dispatch(setwishlistDataLoading(false));
        }
    };
};