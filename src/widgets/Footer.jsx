import React from "react";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="grid gap-8 md:gap-0 text-gray-500 md:w-4/5 mx-auto mt-32 md:grid-cols-5">
      <div>
        <img src={Logo} alt="" className="w-10 h-10" />
        <p>
          <a href="#">Our promise</a>. <a href="#">Our secret</a>
        </p>
      </div>
      {[1, 2, 3].map((v) => (
        <nav key={v} className="grid gap-2">
          <p className="text-lg text-black">Coco Introduction</p>
          <a href="">Introduction1</a>
          <a href="">Introduction2</a>
          <a href="">Introduction3</a>
          <a href="">Introduction4</a>
          <a href="">Introduction5</a>
        </nav>
      ))}
      <nav className="grid gap-2 content-start">
        <p className="text-base text-black">Register</p>
        <p>You better register now!!!!</p>
        <input
          type="text"
          className="text-black py-2 px-3 border"
          placeholder="Your Email"
        />
      </nav>
      <div className="col-span-full mt-12 border-t py-9 flex flex-col gap-4 justify-between md:flex-row">
        <p>
          Template designed by{" "}
          <a href="https://cruip.com" className="text-cyan-500">
            Cruip.
          </a>{" "}
          All right reserved.
        </p>
        <p className="flex gap-4">

        </p>
      </div>
    </footer>
  );
}

export default Footer;
