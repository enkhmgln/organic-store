import React from "react";
import Menu from "../Menu";

const SideBar = (props) => {
  props.showSideBar && <div>

    <Menu/>
  </div>;
};

export default SideBar;
