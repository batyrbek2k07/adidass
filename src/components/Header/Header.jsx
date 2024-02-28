import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";
import { BsBagCheckFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { IoIosHeart } from "react-icons/io";
import { Button } from "@mui/material";
const Header = () => {


  const nav=useNavigate()
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <img onClick={()=>nav("/")} src={logo} alt="" />
          </div>
          <nav>
            <NavLink to="/">MEN</NavLink>
            <NavLink to="/">WOMEN</NavLink>
            <NavLink to="/">KIDS</NavLink>
            <NavLink to="/">SALE</NavLink>
            <NavLink to="/">3 STRIPE LIFE</NavLink>
          </nav>
          <div className="header-input">
            <input type="search" placeholder="search" />
            <div className="header-icon">
              <Button onClick={()=>nav("/admin")}>

              <BsPersonFill />
              </Button>
              <IoIosHeart />
              <BsBagCheckFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
