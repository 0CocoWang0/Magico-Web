import React from "react";
import Logo from "../assets/logo.png"

function Header() {
  return (
    <header className="flex justify-between items-center h-20">
      <img src={Logo} alt="" className="w-20 h-20" />
      <nav className="flex items-center">
        <a href="#">It's all about me</a>
        <a
          href="#"
          className="ml-8 bg-gray-900 px-4 py-2 rounded text-blue-50 flex items-center"
        >
          About me
        </a>
      </nav>
    </header>
  );
}

export default Header;
