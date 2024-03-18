import React from 'react'
import { loadStripe } from '@stripe/stripe-js';

const StripePayment = ({ cart, quantity }) => {
    const makePayments = async () => {
        const stripe = await loadStripe("pk_test_51OtbuqSDNsT47lA7HRo07KBgvFlbMobWvGtQukaC6mjRqx3I0If7lqjGumIMZSJuhFbAuWIabmnnRoXvCrwoYIY0005Tc6uYYt");

        try {
            const lineItems = cart.map(item => ({
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.title
                    },
                    unit_amount: item.price * 100,
                },
                quantity: quantity[item.id] || 1, // will use quantity per item
            }));
            console.log('lineItems front', lineItems)

            const response = await fetch("http://localhost:8080/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ lineItems })
            });

            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }

            const session = await response.json();

            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                console.error(result.error);
            }
        } catch (error) {
            console.error('Error making payment:', error);
        }
    };
    return (
        <div>
            <button className='font-bold hover:text-blue-600  m-4 font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'
                onClick={makePayments}
            >
                Pay Now
            </button>
        </div>
    )
}

export default StripePayment