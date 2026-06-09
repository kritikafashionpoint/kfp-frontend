import { post_api } from "../api_helper/api_helper";

export const handleAdvancePayment = async ({ selectedProduct, actualQuantity }) => {
    try {

        const response = await post_api({
            path: "payment/create-order",
            token,
            body: {
                amount: selectedProduct.p_advance_payment,
                product_id: selectedProduct.product_id,
                actualQuantity,
                payment_type: 'advance'
            }
        });

        window.location.href = response.data.paymentUrl;

    } catch (error) {
        console.log(error);
    }
};

export const handleFullPayment = async ({ selectedProduct, actualQuantity }) => {

    const totalAmount =
        actualQuantity
            ? selectedProduct.p_customer_price * actualQuantity
            : selectedProduct.p_customer_price;

    const response = await post_api({
        path: "payment/create-order",
        token,
        body: {
            amount: totalAmount,
            product_id: selectedProduct.product_id,
            actualQuantity,
            payment_type: 'full'
        }
    });

    window.location.href = response.data.paymentUrl;
};