import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/Navbar';
import Cart from './Components/other/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const isUserLoggedIn = !!localStorage.getItem('token')

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      alert('This product is already in your cart!');
      return;
    }
    console.log('product added', item);
    setCart(prevCart => ([...prevCart, item]));
  };


  return (
    <div className="App">
      <Navbar />
      <Routes>
        {
          isUserLoggedIn
            ?
            (
              <>
                <Route path='/homepage' element={<HomePage cart={cart} addToCart={addToCart} />} />
                <Route path='/cart' element={<Cart cart={cart} />} />

              </>
            ) :
            (
              <>
                <Route path='/' element={<LandingPage />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
              </>
            )
        }
      </Routes>
    </div>
  );
}

export default App;
