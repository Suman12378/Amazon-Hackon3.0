import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi"
import { useSelector } from 'react-redux'
import logo from "../assets/award-trophy-star (1).png";
import time from "../assets/hourglass.png";
const Header = () => {

   const {cartItems, reward} = useSelector(state => state.cart)
  return (
   <nav>
    <div className="logo">
      <h2>The Wheel of</h2>
      <img src={time} alt="time" />
    </div>

    <div>

       <Link to={"/"}>Home</Link>
       <Link to={"/cart"}>
       
        <FiShoppingBag/>
        
        <p>{cartItems.length}</p> </Link>
        <Link to={"/orders"} style={{marginRight: "-1.5rem"}}> Orders</Link>
        <div className="reward">
        <p>{reward}</p>
        <img src={logo} alt="logo" />
        </div>
        
    </div>



   </nav>
  )
}

export default Header