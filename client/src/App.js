import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/Navbar';

function App() {
  const isUserLoggedIn = !!localStorage.getItem('token')
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {
          isUserLoggedIn
            ?
            (
              <>
                <Route path='/homepage' element={<HomePage />} />
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
