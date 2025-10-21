import React, { useContext, useRef, useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { getTotalCartItems } = useContext(ShopContext)

  const drawerRef = useRef(null)

  const toggleDrawer = () => setDrawerOpen(!drawerOpen)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerOpen(false)
      }
    }
    if (drawerOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [drawerOpen])

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to={'/'}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none' }} to={'/men'}>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none' }} to={'/women'}>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to={'/kids'}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to={'/login'} className='login-btn'><button onClick={() => { setDrawerOpen(false) }}>Login</button></Link>
        <Link to={'/cart'}><img src={cart_icon} alt="" onClick={() => { setDrawerOpen(false) }} /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleDrawer}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Drawer menu */}
      <ul className={`drawer ${drawerOpen ? "show" : ""}`}>
        <div className="drawer-close" onClick={toggleDrawer}>×</div>
        <li onClick={() => { setMenu("shop"); setDrawerOpen(false) }}>
          <Link to={'/'}>Shop</Link>
        </li>
        <li onClick={() => { setMenu("men"); setDrawerOpen(false) }}>
          <Link to={'/men'}>Men</Link>
        </li>
        <li onClick={() => { setMenu("women"); setDrawerOpen(false) }}>
          <Link to={'/women'}>Women</Link>
        </li>
        <li onClick={() => { setMenu("kids"); setDrawerOpen(false) }}>
          <Link to={'/kids'}>Kids</Link>
        </li>
        <li onClick={() => { setDrawerOpen(false) }}>
          <Link to={'/login'}>Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
