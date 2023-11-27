import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";



import Swal from "sweetalert2";

import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const CheckOut = () => {

    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()
    const { id } = useParams()

    const getCard = cart.find((item) => item._id === id);
    const totalFees = getCard?.fees ? parseFloat(getCard.fees) : 0;


    useEffect(() => {
        if (totalFees > 0) {
         
            axiosSecure.post('/create-payment-intent', { fees: totalFees })
                .then(res => {
                   
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalFees])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);

        }
        else {
            console.log('payment method', paymentMethod)

        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "Anonymous",
                    name: user?.displayName || "Anonymous"
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
            }

            const payment = {
                email: user.email,
                fees: totalFees,
                transactionId: paymentIntent.id,
                date: new Date(), // utc date convert. use moment js to 
                cartIds: getCard._id,
                campItemIds: getCard.camp_id,
                status: 'pending'
            }
            const res = await axiosSecure.post('/payments', payment);
            console.log('payment saved', res.data);
            refetch();
            if (res.data?.paymentResult?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Thank you for Join Camp `,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/paymentHistory')
            }
        }



    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </form>

    );
};

export default CheckOut;