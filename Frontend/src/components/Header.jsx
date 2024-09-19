import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="sticky top-0 z-50 ">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
