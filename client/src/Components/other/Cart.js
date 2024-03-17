import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";

const Cart = ({ cart }) => {
    const [quantity, setQuantity] = useState(1);

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * 100, 0)
    }
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
                                <button className='m-2 border w-8 cursor-pointer font-serif' >-</button>
                                <span className='m-2 font-serif'>{quantity}</span>
                                <button className='m-2 border w-8 cursor-pointer font-serif' >+</button>
                            </div>
                            <button className='font-serif text-2xl text-red-400' ><MdDeleteForever /></button>
                        </div>
                    ))}
                    <div className='mt-4 font-serif font-bold'>Total Price : {calculateTotalPrice()} Rs.</div>
                    <button className='font-bold hover:text-blue-600  m-4 font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'
                    >
                        Pay Now
                    </button>
                </div>
            ) : (
                <div className='font-serif m-8 text-red-500 text-2xl'>Your shopping cart is empty !!</div>
            )}
        </div>
    )
}

export default Cart