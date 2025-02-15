import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment = () => {
    const { id } = useParams();
    const stripe = useStripe();
    const elements = useElements();
    const [order, setOrder] = useState({});
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch(`https://ajker-bazar-zeta.vercel.app/orders/${id}`)
        //  fetch(`http://localhost:3000/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                //  fetch("http://localhost:3000/create-payment-intent", {
                fetch("https://ajker-bazar-zeta.vercel.app/create-payment-intent", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ price: data.price })
                })
                .then(res => res.json())
                .then(data => setClientSecret(data.clientSecret));
            });
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: { card, billing_details: { email: order.buyerEmail } }
        });

        if (error) {
            console.error(error);
        } else {
            //  fetch(`http://localhost:3000/orders/pay/${id}`, {
            fetch(`https://ajker-bazar-zeta.vercel.app/orders/pay/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" }
            })
            .then(res => res.json())
            .then(() => {
                setSuccess(true);
            });
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Pay for {order.productName}</h2>
            <p className="mb-2">Amount: ${order.price}</p>

            {!success ? (
                <form onSubmit={handleSubmit}>
                    <CardElement className="border p-3 rounded-md" />
                    <button type="submit" disabled={!stripe} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Pay</button>
                </form>
            ) : (
                <div className="text-green-500 font-bold mt-4">Payment Successful! ✅</div>
            )}
        </div>
    );
};

export default Payment;
