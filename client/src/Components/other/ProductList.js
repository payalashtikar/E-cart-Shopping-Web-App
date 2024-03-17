

import React, { useEffect, useState } from 'react';
import './product.css';

const ProductList = ({ addToCart, cart }) => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='flex flex-col h-full w-full p-4'>
                <h1 className='font-mono text-2xl p-2'>W-E-L-C-O-M-E</h1>

                <div className='flex flex-wrap justify-center'>
                    {products.map((prod, id) => (
                        <div key={id} className='shadow-lg product-card rounded-lg flex flex-col justify-center items-center'>
                            <div className='product-thumbnail'>
                                <img className='w-full object-cover' width='100px' src={`${prod.thumbnail}`} alt="product" />
                            </div>
                            <div className='product-info flex flex-col justify-start items-start'>
                                <div className='font-serif'>Amount: {prod.price} Rs.</div>
                                <div className='font-serif'>Title: {prod.title}</div>
                                <div className='font-serif'>Rating: {prod.rating}</div>
                                <div className='font-serif'>Brand: {prod.brand}</div>
                                <div className='font-serif'>Category: {prod.category}</div>
                                <div className='font-serif'>Discount Percentage: {prod.discountPercentage}%</div>
                            </div>
                            <button className='text-red-400 w-40 font-serif border rounded-3xl p-2 m-4' >Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;


