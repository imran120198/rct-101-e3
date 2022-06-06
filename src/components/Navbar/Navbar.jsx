import React,{useState} from "react";
import {Link} from "react-router-dom"

// use react-router Link or NavLink
//const Link = <a />;

const Navbar = () => {
  const [Cart,setCart] = useState("")
  const [value,setValue] = useState(3)

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to={"/"}>LOGO</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */ Cart({value})}</span>
      <button data-cy="navbar-login-logout-button">Login</button>
    </div>
  );
};

export default Navbar;
