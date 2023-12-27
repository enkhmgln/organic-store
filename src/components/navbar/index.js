import React from "react";
import Menu from "../Menu";
import Logo from "../Logo";
import Button from "../Button";
import MenuItem from "../MenuItem";

const Navbar = (props) => {
  return (
    <div className="flex w-[100%] justify-around items-center  fixed bg-white md:py-2 border-b-2 border-gray-300">
    
      <div className="md:hidden" onClick={props.toggleSideBar}>
      <i className="fa-solid fa-bars" style={{fontSize:'30px'}}></i>
      </div>
      <Logo />
     <nav className="hidden md:block">
     <Menu />
     </nav>
      <div>
        <Button url="/login" text="Login" />
        <MenuItem text="Sign up" />
      </div>
    </div>
  );
};

export default Navbar;
