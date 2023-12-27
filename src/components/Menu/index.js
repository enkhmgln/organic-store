  import React from "react";
  import MenuItem from "../MenuItem";
  

  const Menu = () => {
    return (
      <ul className='flex flex-col justify-between md:gap-10 md:flex-row' >
        <MenuItem text="Everything" link='/ship' />
        <MenuItem text="Groceries" />
        <MenuItem text="Juice" />
      </ul>
    );
  };

  export default Menu;
