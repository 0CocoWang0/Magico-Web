import React from "react";
import SectionHeading from "./SectionHeading";
import Logo from "../assets/logo.png";
import Coco from "../assets/animeCo.png"

function Clients() {
  return (
    <div>
      <SectionHeading
        title="Past clients"
        subtitle="It's all myself! Self employed BOSS."
      ></SectionHeading>
      <div className="flex flex-col lg:flex-row items-center md:justify-between gap-8 my-16">
        <img src={Logo} alt="" className="w-20 h-20" />
        <img src={Logo} alt="" className="w-20 h-20" />
        <img src={Logo} alt="" className="w-20 h-20" />
        <img src={Logo} alt="" className="w-20 h-20" />
        <img src={Logo} alt="" className="w-20 h-20" />
      </div>
      <div className="grid justify-items-center border-2 rounded px-14 mt-28">
        <img
          src={Coco} alt=""
          className="object-cover w-24 h-24 rounded-full bg-gray-400 -translate-y-1/2"
        />
        <p className="mt-5 mb-4 text-xl font-medium">
            Coco is the best person I've ever met! I love Coco! I love everything that you do!
        </p>
        <p className="text-lg font-bold">Coco's Fan</p>
        <p className="text-gray-500 mb-8">
            Coco's biggest fan <a href="#" className="text-cyan-500"> @Coco </a>
        </p>
      </div>
    </div>
  );
}

export default Clients;
