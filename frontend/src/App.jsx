
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
import Footer from './Components/Footer/Footer'
function App() {
 

  return (
    <>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
      <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
      <Route path='/product' element={<Product/>} >
      <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
