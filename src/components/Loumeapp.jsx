import React from "react";
import { ap } from "../utils/assets";

function Loumeapp() {
  return (
    <section className="w-full h-screen relative">
      <div className="w-full h-full relative">
        <img
          className="w-full h-full object-cover object-center rounded-3xl"
          src={ap}
          alt=""
        />
      </div>

      <div className="w-full h-full flex flex-col gap-[32px]  text-white absolute top-0 left-0 justify-center items-center">
        <h2 className="font-bold text-xl uppercase">Schlafbegleitung</h2>
        <p className="text-4xl">Entdecke über 100 Inhalte in der Loume App.</p>
      </div>
    </section>
  );
}

export default Loumeapp;
