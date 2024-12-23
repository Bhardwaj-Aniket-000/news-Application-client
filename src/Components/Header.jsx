import React, { useEffect, useState } from "react";
import logo from "../../assets/svg/earth.svg";
import headerImg from "../../assets/svg/brand.png";

function Header() {
  return (
    <header className="h-[10vh] w-full bg-[#151616] flex py-2 justify-between">
      <div className="logo h-full flex items-center justify-center pl-2">
        <img src={headerImg} alt="website logo" className="h-3/4" />
        <h2 className="text-red-500 font-inter font-medium text-xl uppercase ml-2">
          NewsPulse
        </h2>
      </div>
      <div className="heading h-full flex items-center mr-2">
        <img src={logo} alt="globe-icon" className="h-1/2 " />
        <h1 className="ml-2 uppercase text-white font-inter text-xs">
          Global Headlines
          <span className=" heading-span hidden"> at Your Fingertips</span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
