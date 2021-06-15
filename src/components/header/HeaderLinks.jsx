import React from 'react'
import { NavLink } from 'react-router-dom'
import './headerLinks.scss'
import cartIcon from '../../images/cart-ico.svg'
import WatchStoreLogo from '../../images/wslogo.svg'

export const HeaderLinks = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/" exact>
          <img src={WatchStoreLogo} alt="watch store logo" />
        </NavLink>
      </div>
      <div className="center-menu">
        <NavLink to="/login">Login</NavLink>
      </div>
      <div className="right-menu">
        <div className="cart-small">
          <NavLink to="/cart">
            <img src={cartIcon} alt="cart icon" />
          </NavLink>
        </div>
      </div>
    </header>
  )
}
export default HeaderLinks
