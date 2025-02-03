import React from "react";
import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  return (
    <section className="w-full h-full top-0 left-0 absolute flex justify-center">
      <div className="w-[90%] flex justify-between items-center absolute top-12">
        <div>
          <p className="text-md text-white border-b ">Home</p>
        </div>

        <div>
          <h1 className="text-xl text-white font-medium">L O U M E</h1>
        </div>

        <div className="flex gap-[16px] text-3xl text-white font-thin ">
          <IoIosSearch />
          <GoPerson />
          <LiaShoppingBagSolid />
        </div>
      </div>

      <div className="flex flex-col  gap-[40px] absolute top-80 ">
        <h1 className="text-white text-center text-6xl  font-bold">
          Schlaf ist deine <br />
          neue Superpower.
        </h1>
        <div className=" flex justify-center gap-[50px] ">
          <button className="w-[150px] bg-white p-[8px] items-center rounded-xl">
            E N T D E C K E N
          </button>
          <button className="w-[150px] flex items-center gap-[8px] text-white">
            VORBESTELLEN <GoArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
