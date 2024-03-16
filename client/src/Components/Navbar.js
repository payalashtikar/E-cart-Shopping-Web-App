
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
const Navbar = () => {
    const isUserLoggedIn = !!localStorage.getItem('token')
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        console.log('log-out')
        navigate('/')
    }
    return (
        <nav className=' shadow-xl z-10  flex min-w-[100%] justify-between items-center    p-4'>
            <div className='font-bold font-mono md:text-4xl text-2xl cursor-pointer ' id='text'>
                <Link className='font-mono' to='/homepage'>
                    Shopping Cart
                </Link>
            </div>
            <div className='flex-wrap text-right '>
                {
                    isUserLoggedIn
                        ?
                        (
                            <>
                                <Link to='/homepage' className='p-2 font-mono  text-black'>
                                    <button className=' font-bold hover:bg-blue-600 hover:text-white  font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'>
                                        Home
                                    </button>
                                </Link>
                                <Link to='/cart' className='p-2 font-mono  text-black'>
                                    <button className=' font-bold hover:bg-blue-600 hover:text-white font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'>
                                        Cart
                                    </button>
                                </Link>
                                <button onClick={handleLogout} className=' font-bold m-2 hover:bg-red-600 hover:text-white  font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'>
                                    Logout
                                </button>
                            </>
                        )
                        :
                        (
                            <div>
                                <Link to='/signup'
                                    className='p-2 font-mono  text-black'
                                >
                                    <button className='font-bold hover:bg-blue-600 hover:text-white  font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'>
                                        Sign-Up
                                    </button>
                                </Link>
                                <Link to='/signin'
                                    className='p-2 font-mono  text-black'
                                >
                                    <button className='font-bold hover:bg-green-600 hover:text-white  font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'>
                                        Sign-In
                                    </button>
                                </Link>
                            </div>
                        )
                }
            </div>
        </nav>
    )
}

export default Navbar

