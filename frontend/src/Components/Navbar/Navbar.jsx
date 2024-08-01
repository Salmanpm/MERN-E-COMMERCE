import React, { useContext, useState, useRef } from 'react'
import './Navbar.css'
// import nav_dropdown_icon from '../../assets/dropdown_icon.png'
import drop_new from '../../assets/drop_new.png'
import logo from '../../assets/logo-new.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {

    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)

    const menuRef = useRef()

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open')
    }
    

  return (
    <div className='navbar'>
      <div  className='nav-logo'>
        <img src={logo} alt="" />
        <p>Brand Shoppers</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={drop_new} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>setMenu("shop")}><Link id='decoration' to='/'>Shop</Link> {menu === "shop" ?  <hr /> : <></>}</li>
        <li onClick={()=>setMenu("mens")}><Link id='decoration' to='/men'>Men</Link> {menu === "mens" ?  <hr /> : <></>} </li>
        <li onClick={()=>setMenu("womens")}><Link id='decoration' to='/women'>Women</Link> {menu === "womens" ?  <hr /> : <></>} </li>
        <li onClick={()=>setMenu("kids")}><Link id='decoration' to='/kids'>Kids</Link> {menu === "kids" ?  <hr /> : <></>} </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?
        <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link id='decoration' to='/login'><button>Login</button></Link>}
        <Link id='decoration' to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
