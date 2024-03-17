

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Add state for loading animation
    const navigate = useNavigate();

    const handleSignUpUser = async (event) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:8080/signup", { firstName, lastName, username, email, password })
            console.log("registration success");
            setFirstName('');
            setLastName('');
            setUsername('');
            setEmail('');
            setPassword('');
            navigate('/signin');
        } catch (error) {
            console.log('registration error');
        }

    };

    return (
        <div className='w-full h-screen flex justify-center items-center backimage'>
            <form
                onSubmit={handleSignUpUser}
                className='mt-40 shadow-2xl border rounded-xl p-4 w-96 md:w-500 flex flex-col justify-start'>
                <input className='p-2  font-bold m-1 mt-2 rounded-lg border font-mono' type='text' placeholder='enter first name here' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input className='p-2  font-bold m-1 mt-2 rounded-lg border font-mono' type='text' placeholder='enter last name here' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input className='p-2  font-bold m-1 mt-2 rounded-lg border font-mono' type='text' placeholder='enter username here' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className='p-2 font-bold m-1 mt-2 rounded-lg border font-mono' type='email' placeholder='enter email here' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='p-2 font-bold m-1 mt-2 rounded-lg border font-mono' type='password' placeholder='enter password here' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className={`p-2 font-bold m-1 text-white mt-4 rounded-lg border font-mono bg-green-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`} type='submit'>
                    {isLoading ? 'Loading...' : 'SignUp'}
                </button>
            </form>
        </div>
    );
};

export default SignUp;
