import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import StripePayment from './StripePayment';

const Cart = ({ cart, removeFromCart }) => {
    const [quantity, setQuantity] = useState({});

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * (quantity[item.id] || 1), 0)
    }
    const increaseQuantity = (itemId) => {
        setQuantity(prevQuantity => ({
            ...prevQuantity,
            [itemId]: (prevQuantity[itemId] || 0) + 1 // Increment quantity for the item
        }));
    };

    const decreaseQuantity = (itemId) => {
        if (quantity[itemId] > 1) { // Ensure quantity doesn't go below 1
            setQuantity(prevQuantity => ({
                ...prevQuantity,
                [itemId]: (prevQuantity[itemId] || 0) - 1 // Decrement quantity for the item
            }));
        }
    };

    return (
        <div className='flex flex-col w-full justify-center items-center '>
            {cart.length !== 0 ? (
                <div className='flex  flex-col justify-center items-center p-4  w-[800px]'>
                    {cart.map((item, id) => (
                        <div key={id} className='border p-2 flex justify-between items-center m-2 w-full'>
                            <img className='w-16 object-cover h-16 ' src={item.thumbnail} alt='' />
                            <div className='font-serif'>{item.title}</div>
                            <div className='font-serif'>{item.price} Rs.</div>
                            <div className='flex '>
                                <button className='m-2 border w-8 cursor-pointer font-serif'
                                    onClick={() => decreaseQuantity(item.id)}
                                >-</button>
                                <span className='m-2 font-serif'>{quantity[item.id] || 1}</span>
                                <button className='m-2 border w-8 cursor-pointer font-serif'
                                    onClick={() => increaseQuantity(item.id)}
                                >+</button>
                            </div>
                            <button className='font-serif text-2xl text-red-400' onClick={() => removeFromCart(item)} ><MdDeleteForever /></button>
                        </div>
                    ))}
                    <div className='mt-4 font-serif font-bold'>Total Price : {calculateTotalPrice()} Rs.</div>

                    <StripePayment cart={cart} quantity={quantity} />
                </div>
            ) : (
                <div className='font-serif m-8 text-red-500 text-2xl'>Your shopping cart is empty !!</div>
            )}
        </div>
    )
}

export default Cart