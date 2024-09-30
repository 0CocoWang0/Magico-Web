import React from "react";
import SectionHeading from "./SectionHeading";
import Image1 from "../assets/universitySelf.png";
import Image2 from "../assets/digitalArt.jpeg"

function Solutions() {
  return (
    <div>
      <SectionHeading
        title="I'm more than you think."
        subtitle="Discover me in different modules."
      ></SectionHeading>
      <div className="grid lg:grid-cols-2 mt-20 gap-20">
        <div>
          <h3 className="mt-7 text-[32px] font-bold">Cognitive Scientist</h3>
          <p className="mt-4 mb-8 text-gray-500">
            Psychology, philosophy, linguistics, computer science. In school, I
            combine arts and science in a unique way.
          </p>
          <ul className="grid gap-3">
            {[1, 2, 3].map((v) => (
              <li
                className={`p-5 justify-between rounded border border-zinc-100 ${
                  v === 1 && "bg-zinc-100"
                }`}
                key={v}
              >
                <p className="text-lg font-bold">
                  I build a unique blend of self.{" "}
                </p>
                <div className="flex justify-between relative">
                  <p className="text-lg leading-7 mt-1">Unique</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img src={Image1} alt="" />
      </div>
      <div className="grid lg:grid-cols-2 mt-20 gap-20">
        <img src={Image2} alt="" />
        <div>
          <h3 className="mt-7 text-[32px] font-bold">Digital Artist</h3>
          <p className="mt-4 mb-8 text-gray-500">
            My love extends from 3D to 2D.
          </p>
          <ul className="grid gap-3">
            {[1, 2, 3].map((v) => (
              <li
                className={`p-5 justify-between rounded border border-zinc-100 ${
                  v === 1 && "bg-zinc-100"
                }`}
                key={v}
              >
                <p className="text-lg font-bold">
                  I build a unique blend of self.{" "}
                </p>
                <div className="flex justify-between relative">
                  <p className="text-lg leading-7 mt-1">Unique</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
    
      </div>

    </div>
  );
}

export default Solutions;
