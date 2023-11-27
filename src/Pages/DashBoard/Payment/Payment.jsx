import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";



const Payment = () => {
    const stripePromise =loadStripe(import.meta.env.VITE_PAYMENT)
    
    return (
        <div >
            <h1 className="text-4xl mb-5 text-center font-bold">Please Pay </h1>
            <h2 className="text-3xl text-center mb-4">For Join The Camp</h2>
            <div>
        <Elements stripe={stripePromise}>
        <CheckOut></CheckOut>
        </Elements>
            </div>
        </div>
    );
};

export default Payment;