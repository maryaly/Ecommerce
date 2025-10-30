import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import { ToastContainer } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './Firebase';


function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged In")
        navigate('/');
      } else {
        console.log("logged Out")
        navigate('/login');
      }
    })
  }, [navigate]);

  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">

      {/* Hide navbar on login page */}
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>

      {/* Hide footer on login page */}
      {!isLoginPage && <Footer />}

      <ToastContainer />
    </div>
  );
}

export default App;
