import React from 'react';
import ProductList from '../Components/other/ProductList';

const HomePage = ({cart,addToCart}) => {


    return (
        <div>
            <ProductList addToCart={addToCart} cart={cart} />
        </div>
    );
};

export default HomePage;
