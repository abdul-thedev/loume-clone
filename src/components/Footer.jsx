import React from "react";
import { foot } from "../utils/assets";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiTiktokLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";

const Footer = () => {
  return (
    <section className=" bg-[#0D0D0D] w-full py-[80px]">
      <div className="w-full h-full flex justify-between p-[16px] gap-[16px] rounded-3xl bg-[#181818]">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover object-center rounded-2xl"
            src={foot}
            alt=""
          />
        </div>
        <div className="w-full h-full  flex flex-col text-white justify-center gap-[48px] items-center">
          <div className="p-[40px]">
            <h1 className="text-3xl font-bold">L O U M E</h1>
          </div>

          <div className="w-full h-full flex justify-between ">

            <div className="px-[20px] flex flex-col justify-center items-center gap-[6px]" >
              <p className="text-lg text-center font-bold ">FOLGE UNS</p>
              <span className="flex text-3xl gap-[12px]">
                <PiInstagramLogoThin />
                <PiTiktokLogoThin />
                <PiLinkedinLogoThin />
              </span>
            </div>

            <div className="px-[20px] " >
              <form className="flex flex-col justify-center item-center gap-[10px]" action="">
                <p className="font-bold text-center">ABONNIERE UNS</p>
                <input className="p-[8px] rounded-lg" type="email" placeholder="Deine E-Mail" />
                <p className="text-center text-xs text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> Quod repudiandae quae exercitationem perspiciatis{" "}
                  <br /> omnis delectus sit eligendi repellat animi, obcaecati,{" "}
                  <br /> vitae quasi quis, modi iste rerum? Illo sapiente sed
                  officiis?
                </p>
              </form>
            </div>
          </div>

          <div className="flex gap-[8px] font-bold text-xs mt-[10px] text-gray-600">
            <p>IMPRESSUM</p>
            <p>DARENSCHUTZERKLARUNG</p>
            <p>WIDERRUFSBELEHRUNG</p>
            <p>AGB</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
