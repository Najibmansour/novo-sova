import React from "react";
import LOGO_SVG from "../../svg_icons/Logo";
import NavMenu from "./navmenu";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex min-h-20 w-full flex-row items-center justify-between bg-[#291703]/30 bg-opacity-30 px-7">
      <LOGO_SVG className="size-20" />
      <NavMenu />
    </div>
  );
};

export default Navbar;
