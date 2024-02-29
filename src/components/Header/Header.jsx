import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

import { CgAdidas } from "react-icons/cg";
import { RiAdminLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { SlBasketLoaded } from "react-icons/sl";



const Header = () => {


  const nav=useNavigate()
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link to="/home"><CgAdidas /></Link>
          </div>
          <nav>
            <NavLink to="/men">MEN</NavLink>
            <NavLink to="/women">WOMEN</NavLink>
            <NavLink to="/kids">KIDS</NavLink>
            <NavLink to="/sale">SALE</NavLink>
            <NavLink to="/stripe">3 STRIPE LIFE</NavLink>
          </nav>
          <div className="header-input">
            <input type="search" placeholder="search" />
            <div className="header-icon">
           <Link to="/admin"><RiAdminLine /></Link>
           <Link to="/like"><SlLike /></Link>
           <Link to="/basket"><SlBasketLoaded /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
