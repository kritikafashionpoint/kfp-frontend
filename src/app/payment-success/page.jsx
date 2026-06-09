// "use client";
// export const dynamic = "force-dynamic";

// import React, { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
// import { get_api } from "../api_helper/api_helper";

// export default function PaymentSuccessPage() {
//     const searchParams = useSearchParams();
//     const router = useRouter();

//     const token = useSelector((state) => state.user.token);

//     const [loading, setLoading] = useState(true);

//     const verifyPayment = async (transactionId) => {
//         try {
//             const response = await get_api({
//                 path: `payment/status/${transactionId}`,
//                 token,
//             });

//             if (
//                 response?.data?.success &&
//                 response?.data?.payment_status === "COMPLETED"
//             ) {
//                 toast.success("Payment Verified Successfully");

//                 setTimeout(() => {
//                     router.push("/order-success");
//                 }, 1500);
//             } else {
//                 toast.error("Payment Failed");

//                 setTimeout(() => {
//                     router.push("/payment-failed");
//                 }, 1500);
//             }
//         } catch (error) {
//             console.error(error);

//             toast.error("Unable to verify payment");

//             setTimeout(() => {
//                 router.push("/payment-failed");
//             }, 1500);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (!searchParams) return;

//         const transactionId = searchParams.get("transactionId");

//         if (!transactionId) {
//             toast.error("Transaction ID Missing");

//             setTimeout(() => {
//                 router.push("/");
//             }, 1500);

//             return;
//         }

//         verifyPayment(transactionId);
//     }, [searchParams]);

//     return (
//         <div className="min-h-screen bg-black flex items-center justify-center">
//             <div className="text-center">
//                 <h1 className="text-3xl text-amber-300 font-bold">
//                     Verifying Payment...
//                 </h1>

//                 <p className="text-gray-400 mt-3">
//                     Please wait while we confirm your payment.
//                 </p>
//             </div>
//         </div>
//     );
// }

import React from 'react'

export default function Page() {
    return (
        <div>Thank You</div>
    )
}
