import React from "react";
import { b01, b02, b03 } from "../utils/assets";

const Bannder = () => {
  return (
    <section className="w-full h-[550px] flex gap-[20px] relative mb-[50px]">
      <div className="w-full h-full relative ">
        <img
          className="w-full h-full object-cover object-center rounded-3xl"
          src={b01}
          alt=""
        />
        <div className="w-full h-full flex flex-col items-center justify-between absolute top-0 left-0 text-white">
          <p className="mt-[50px] text-2xl">Atmung & Licht</p>

          <div className=" w-full p-[30px]">
            <p className="text-lg">
              Finde Ruhe durch die perfekte <br /> Kombination aus beruhigendem
              Licht <br /> und geführten Atemübungen.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full relative ">
        <img
          className="w-full h-full object-cover object-center rounded-3xl"
          src={b02}
          alt=""
        />
        <div className="w-full h-full flex flex-col items-center justify-between absolute top-0 left-0 text-white">
          <p className="mt-[50px] text-2xl">Geführte Meditationen</p>

          <div className=" w-full p-[30px]">
            <p className="text-lg">
              Entspanne Körper und Geist mit <br /> unseren speziell
              entwickelten <br />
              geführten Meditationen.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full relative ">
        <img
          className="w-full h-full object-cover object-center rounded-3xl"
          src={b03}
          alt=""
        />
        <div className="w-full h-full flex flex-col items-center justify-between absolute top-0 left-0 text-white">
          <p className="mt-[50px] text-2xl">Routine</p>

          <div className=" w-full p-[30px]">
            <p className="text-lg">
              Finde mit Loume zu einem erholsamen <br /> Schlafrhythmus durch
              eine <br />
              regelmäßige Schlafroutine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannder;
